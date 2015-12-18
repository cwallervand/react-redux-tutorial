'use strict';
import React from 'react';
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import { connect } from 'react-redux';


class App extends React.Component {
    render() {
        this.props.dispatch({type: 'ADD_TODO'});
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}
// connect(state => state)(App);
export default connect()(App);
