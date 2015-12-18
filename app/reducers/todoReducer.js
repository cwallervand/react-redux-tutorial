'use strict';

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            console.log('ADD_TODO', action);
            return state;
        default:
            return state;
    }
};

export default todos;
