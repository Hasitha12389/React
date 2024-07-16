import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
    </div>
  );
};

export default Home;

/*   CSS
.active {
  font-weight: bold;
  color: red;
  margin-right: 20px;
}

// Remove the default list styling 
.bar {
  list-style-type: none;
  padding: 0;
  margin: 20px;
  display: flex;
  gap: 30px; // Add space between the links 
}

// Style the NavLink components 
.bar a {
  text-decoration: none; // Remove underline 
  color: black;  /* Default text color 
  padding: 10px 20px; /* Add padding for a better look 
  border-radius: 5px; /* Optional: add rounded corners *
  transition: background-color 0.3s ease; /* Optional: add a transition effect 
}

/* Style for active NavLink 
.bar .active {
  font-weight: bold;
  color: red; /* Change color for active link 
}

/* Optional: add a hover effect 
.bar a:hover {
  background-color: hsl(0, 66%, 68%); /* Change background color on hover 
}


App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className='bar'>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)} >
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                About
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Contact
              </NavLink>
              </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

*/