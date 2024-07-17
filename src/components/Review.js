// src/components/Review.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../components/FormContext';

const Review = () => {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <div>
      <h2>Review Your Details</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Review;
