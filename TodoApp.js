import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const mockApiData = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a To-Do App', completed: false },
];

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setTodos(mockApiData);
    }, 500);
  }, []);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputMessage('Input value is changing');
  };

  const handleInputFocus = () => {
    setInputMessage('Input is focused');
  };

  const handleInputBlur = () => {
    setInputMessage('Input has lost focus');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="TodoApp">
      <h1>To-Do List</h1>
      <TodoInput
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onInputFocus={handleInputFocus}
        onInputBlur={handleInputBlur}
        onAddTodo={handleAddTodo}
        inputMessage={inputMessage}
      />
      <TodoList todos={todos} onToggleComplete={toggleComplete} onRemoveTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;


/*
CSS
.TodoApp {
  text-align: center;
  margin: 20px;
}

input {
  padding: 5px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #21a1f1;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 5px;
}

li.completed span {
  text-decoration: line-through;
  color: grey;
}

li button {
  padding: 3px 7px;
  background-color: #ff4d4d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

li button:hover {
  background-color: #ff0000;
}

p {
  color: #555;
}


App.js
import React from 'react';
import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;


*/ 