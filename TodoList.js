import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ items}) => {
    return (
        <div>
            <h2>Todo List</h2>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            )) }
        </ul>
        </div>
    );
};

TodoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;

// add this between import part and function App part
// const todos = ["Learn React", "Build a TodoList", "Master JavaScript"];

// when component calling we want to call with array argument
// <TodoList items={todos}/>