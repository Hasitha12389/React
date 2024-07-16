import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <h1>Theme Management</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </header>
  );
};

export default Header;

/*
CSS
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

/* Light theme styles 
.light {
    background-color: #fff;
    color: #000;
  }
  
  .light header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
  }
  
  /* Dark theme styles 
  .dark {
    background-color: #333;
    color: #fff;
  }
  
  .dark header {
    background-color: #222;
    border-bottom: 1px solid #444;
  }
  
  .dark button {
    background-color: #555;
    color: #fff;
  }
  
  .dark button:hover {
    background-color: #666;
  }

  App.js
  import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <p>Content of the application goes here.</p>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;


*/
