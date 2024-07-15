import React, {useState } from 'react';

const InputComponent = () => {
    const[inputValue, setInputValue] = useState("");
    const[statusMessage, setStatusMessage] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setStatusMessage("Input value is changing");
    };

    const handleInputFocus = () => {
        setStatusMessage("Input is focused");
    };

    const handleInputBlur = () => {
        setStatusMessage("Input has lost focus");
    };

    const handleButtonClick = () => {
        alert(`Button clicked with input value: ${inputValue}`);
      };
      

    return (
        <div>
            <input 
            type = "text"
            value = {inputValue}
            onChange = {handleInputChange}
            onFocus = {handleInputFocus}
            onBlur = {handleInputBlur}
            />
            <button onClick = {handleButtonClick}>Submit</button>
           <p>{statusMessage}</p>
           <p>Input value: {inputValue}</p>
        </div>
    );
};

export default InputComponent;