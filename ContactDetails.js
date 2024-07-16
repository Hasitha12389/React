// src/components/ContactDetails.js
import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../components/FormContext';

const ContactDetails = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
  });

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        navigate('/review');
      }}
    >
      <Form>
        <div>
          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label>Phone</label>
          <Field name="phone" type="text" />
          <ErrorMessage name="phone" component="div" />
        </div>
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};

export default ContactDetails;

/*
Index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FormProvider } from './components/FormContext';

ReactDOM.render(
  <FormProvider>
    <App />
  </FormProvider>,
  document.getElementById('root')
);

App.js
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

CSS
*/