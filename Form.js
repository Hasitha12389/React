import React, { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Input Value: ${inputValue}');
    };

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input
                type = 'text'
                value = {inputValue}
                onChange = {handleInputChange}
                placeholder = "Enter text" 
                />
                <br/> 
                 <input
                type = 'text'
                value = {inputValue}
                onChange = {handleInputChange}
                placeholder = "Enter text" 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;

/*  CSS
form {
  display: inline-block;
  margin: 20px auto;
}

input {
  padding: 8px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
 padding: 8px 12px;
 border-radius: 4px;
 border: none;
 background-color: #61dafb;
 color: white;
 cursor: pointer;
}

button hover {
  background-color: #21a1f1;
}

*/