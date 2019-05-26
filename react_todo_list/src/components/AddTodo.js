import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class AddTodo extends Component {
    //Component level state
    state = {
        title: ' '
    }

    //using the square brackets and target name is useful for multiple fields such as username, email, password, etc
    //instead of making an onChange event for each input
    onChange = (e) => this.setState({ [e.target.name]: 
        e.target.value });
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''}); //resetting input
    }
    render() {
        return (
            <form onSubmit = {this.onSubmit} style={{ display: 'flex'}}>
                <input 
                type="text" 
                name = "title" 
                style={{ flex: '10', padding: '5px' }} 
                placeholder="Add Todo..."
                value={this.state.title} 
                onChange={this.onChange}
                /> 
                <input 
                type="submit" 
                value="Submit" 
                className="btn"
                padding="10px"
                style={{flex: '1'}}
                 />
            </form> 
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired  
}

export default AddTodo
