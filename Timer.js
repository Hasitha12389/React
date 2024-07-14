//  displays a timer starting at 0 and increments every second, stopping when a "Stop" button is clicked
import React,{ useState, useEffect } from 'react';

//useState: Used to create state variables time and isRunning. time holds the current time, and isRunning determines whether the timer is running or not.
const Timer = () => {
    const[time, setTime] = useState(0);
    const[isRunning,setIsRunning] = useState(true);

    //useEffect: This hook is used to run side effects. Here, it sets up a timer that increments the time state every second if isRunning is true. It also cleans up the interval when the component unmounts or isRunning changes.
    useEffect(() => {
       let timer;           // variable
       if(isRunning) {          // 
        timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
       }

       return () => clearInterval(timer);
    },[isRunning]);

    // handleStop: This function stops the timer by setting isRunning to false.
const handleStop = () => {
    setIsRunning(false);
};

return (
    // { }This curly brackets used to access variable values 
    <div>
        <h1>Timer: {time} seconds</h1>          
    <button onClick = {handleStop}>Stop</button>
    </div>
);
};

export default Timer;