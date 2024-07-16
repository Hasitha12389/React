import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onRemoveTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span onClick={() => onToggleComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
