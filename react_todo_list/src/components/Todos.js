
import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component{
  render (){
    //  console.log(this.props.todos)
    //Map is High order Array method: can return an array from an array
    //used here to loop through and output jsx  
    return this.props.todos.map((todo) => (
       // <h3>{ todo.title } </h3> //instead of outputting h3 we want to load whole components called todo item
        <Todoitem key={todo.id} todo={todo} markComplete=
        {this.props.markComplete} delTodo={this.props.delTodo}/>
       ));
  }
 
}

 // PropTypes
 Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;