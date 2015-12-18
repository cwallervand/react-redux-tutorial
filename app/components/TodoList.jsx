'use strict';
import React from 'react';
import Todo  from './Todo.jsx';

 class TodoList extends React.Component {
     render() {
         return (
            <ul>
                <Todo />
            </ul>
        )
    }
}

export default TodoList;
