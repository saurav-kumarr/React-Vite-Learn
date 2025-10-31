import React, { Component, useContext, useState } from "react";
import { createContext } from "react";

//  - PropDrilling = DATA
//    - ComponentA
//      - ComponentB
//        - ThemedComponent

// useContext()

// Create a Context;
// const MyContext = createContext(defaultValue);

// Consme the Context
// const contextValue = useContext(MyContext);

// Provide the Context:
{/* <MyContext.Provider value={someValue}>
    <ComponentA />
</MyContext.Provider> */}


const MyContext = createContext("Light");

function PropDrilling(){

    const theme = 'dark';

    const [themes   , setTheme] = useState('Dynamic light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'Dynamic light' ?  'Dynamic dark' : 'Dynamic light'));
    };

    return(
        <MyContext.Provider value={themes}>
        <div style={{border:'2px solid black', padding:'20px'}}>
            <h2>Parent Component</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ComponentA theme={theme} />
        </div>
        </MyContext.Provider>
    );
}

function ComponentA({theme}) {
    return(
        <div style={{border:'2px solid black', padding:'20px'}}>
            <h2>Component: A(child)</h2>
            <ComponentB theme={theme} />
        </div>
    );
}

function ComponentB({theme}) {
    return(
        <div style={{border:'2px solid black', padding:'20px'}}>
            <h2>Component: B(Grand Child)</h2>
            <ThemedComponent theme={theme} />
        </div>
    );
}

function ThemedComponent({theme}) {

    const contextValue = useContext(MyContext);

    return(
        <div style={{border:'2px solid black', padding:'20px'}}>
            <h2>Themed Component(Great-Grand Child)</h2>
            <div>
                <h3>The Current theme is: {theme}</h3>
                <h3>The Current theme by useContext is: {contextValue}</h3>
            </div>
        </div>
    );
}

export default PropDrilling;