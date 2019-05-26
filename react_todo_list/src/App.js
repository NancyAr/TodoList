
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import uuid from 'uuid'; //installing and importing uuid
import Axios from 'axios';
//to generate random ids for each todo, we use version 4

class App extends Component{

  //We will replace this hardcoded array of todos by fetching the todos from JSONPlaceholder API
  //To learn HTTP requests using axios
  //To do that we will deal with another lifecycle method
  /*state = {
    todos: [
      {
        //by calling uuid version 4 we generate new random id for each component
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with Ahmood',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }*/

  state = {
    todos: []
  }

  componentDidMount() {
    //The array is of size 200 so to limit it we will use a query parameter
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //Delete todo
  delTodo = (id) => {
    //filter method: high order method that loops through array and return another array based on a condition
    //Spread operator: ... to copy all objects except the ones that fail/pass the condition
    //this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    //We will use the request also for delete
    Axios.delete('https://jsonplaceholder.typicode.com/todos/$id')
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));

  }

  //Add Todo
  //After using the REST API we will need to make a request to the JSONPlaceHolder
  //To add a new TODO 
  //We won't be needing uuid 
  addTodo = (title) => {
    /*const newTodo={
      id: uuid.v4(),
      title,
      completed: false

    }*/
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: 
        [...this.state.todos, res.data]}));
  }
  render (){
    //console.log(this.state.todos)
    //Adding "exact" before path of index page is neccessary
    //To separate the components
    //Without it the about page will display the about AND everything else
    return(
      <Router>
      <div className="App">
        <div className="container">
        <Header/>
        <Route exact path="/" render= {props => (
          <React.Fragment>
            <AddTodo addTodo = {this.addTodo} />
          <Todos todos={this.state.todos} markComplete = 
          {this.markComplete} delTodo={this.delTodo}/>
        
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        </div>
        
    </div>
    </Router>
    );
  }
}

export default App;
