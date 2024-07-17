// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
import ContactDetails from './components/ContactDetails';
import Review from './components/Review';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetails />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;