import React, { useState } from 'react';

const UserForm = () => {
    const[formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
const[errors, setErrors]    = useState("");
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const validateForm = () => {
        const { username, email, password } = formData;
        if(!username || !email || !password){
           setErrors('All fields are reuired.');
           return false;
        }
        setErrors('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateForm()) {
            console.log("Form submitted:",formData);
        }
    };

    return(
        <form onSubmit = {handleSubmit}>
        <div>
            <labal>Username:</labal>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type = "email"
            name = "email"
            value = {formData.email}
            onChange = {handleChange}
            />
        </div>
        <div>
            <label>Password</label>
            <input
            type = 'password'
            name = 'password'
            value = {formData.password}
            onChange = {handleChange}
            />
        </div>
        {errors && <p style={{color: 'red'}}>{errors}</p>}
        <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;