import React, {useState } from 'react';
const ClickTracker = () => {
    const[clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    return (
        <div className = "click-tracker">
            <button onClick={handleClick}>Click me!</button>
            <p>You have clicked the button {clickCount} times</p>
        </div>
    );
};

export default ClickTracker;

/* CSS

.click-tracker{
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

p {
  font-size: 18px;
}
*/