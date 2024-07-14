//This is normal button
import React, {useState} from 'react';

//State Management: The useState hook is used to manage the state of the isOn variable, which determines if the message is "ON" or "OFF"

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

//Event Handling: The handleToggle function toggles the state between true and false when the button is clicked.
    
    return(
        <div>
            <button onClick = {handleToggle}>
                {isOn ? 'ON' : 'OFF'}
            </button>
            <p>The button is {isOn? 'ON' : 'OFF'}</p>
    //Conditional Rendering: The button text and the message displayed in the <p> tag are determined by the value of isOn.
        </div>
    );
};

export default Toggle;

// App.css 
// CSS for buttons 
//  button {
//  margin: 30px;
//  padding: 15px 30px;
//  font-size: 16px;
//  background-color: aqua;
