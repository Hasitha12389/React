import React from 'react';

const TodoInput = ({ inputValue, onInputChange, onInputFocus, onInputBlur, onAddTodo, inputMessage }) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        placeholder="Add a new to-do"
      />
      <button onClick={onAddTodo}>Add</button>
      <p>{inputMessage}</p>
    </div>
  );
};

export default TodoInput;
