// src/components/PersonalDetails.js
import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../components/FormContext';

const PersonalDetails = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
  });

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        navigate('/contact-details');
      }}
    >
      <Form>
        <div>
          <label>First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" component="div" />
        </div>
        <div>
          <label>Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" component="div" />
        </div>
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};

export default PersonalDetails;
