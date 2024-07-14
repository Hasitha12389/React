//This is normal button
import React, {useState} from 'react';

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return(
        <div>
            <button onClick = {handleToggle}>
                {isOn ? 'ON' : 'OFF'}
            </button>
            <p>The button is {isOn? 'ON' : 'OFF'}</p>
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
