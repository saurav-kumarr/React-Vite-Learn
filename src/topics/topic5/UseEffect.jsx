import React, { useEffect, useState } from 'react';


// The useEffect hook in React lets you run code 
// automatically when something changes or when a component loads.

//const { useEffect } = require("react");

// It's like setting a task to happen after the 
// screen updates or when certain data is ready.

//  SYNTAX:
//  useEffect(() => {
//     Code to run
//     }, [dependency]);

// useEffect(() => {}); // Run on every render
// useEffect(() => {}, []); // runs only once after the initial render

// useEffect(() => {}, [count]); // Runs on initial render and when count changes.

function UseEffect(){
    const [count, setCount] = useState(0);
    const [anotherValue, setAnotherValue] = useState(10);

    useEffect(() => {
        document.title = `Count: ${count}`;
    },[count]);
    
    useEffect(() => {
        console.log(`useEffect Triggered`);
    });

    const incrementCount = () => {
        setCount(count + 1);  
    };

    return (
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={() => setAnotherValue(anotherValue + 1)}>Another Value</button>
        </div>
    );
};

export default UseEffect;