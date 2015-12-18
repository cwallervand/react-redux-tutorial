'use strict';
import React from 'react';

class AddTodo extends React.Component {
    addTodoClick() {
        console.log('add todo click');
    }
    render() {
        return (
            <div>
                <input type="text" ref={ (node) => {this.input = node;} } />
                <button onClick={this.addTodoClick}>Add TODO</button>
            </div>
        )
    }
}

export default AddTodo;
