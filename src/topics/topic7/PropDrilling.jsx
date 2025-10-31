import React, { Component, useContext } from "react";
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

const MyContext = createContext("Light");

function PropDrilling(){

    const theme = 'dark';

    return(
        <div style={{border:'2px solid black', padding:'20px'}}>
            <h2>Parent Component</h2>
            <ComponentA theme={theme} />
        </div>
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