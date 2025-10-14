import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// JSX is a syntax extension for JavaScript that looks like HTML.

// It allows you to write HTML-like code within JavaScript,
// Which React then transforms into JavaScript objects.

// 1. You can embed any valid JavaScript expression inside curly braces {} in JSX.
// 2. JSX attributes use camelCase syntax.

function WelcomeMessage(name){
  return <h1>Hello, {name}!</h1>
}

function App() {
  
    const element = <h1>Hello, world!</h1>
    const name = "Saurav";
    const isLoggedin = true;
    if(isLoggedin){
  return (
    <div>
      {WelcomeMessage("Alice")}
      <h1>Logged in.</h1>
      {element}
      {10+2}
      <h1 className='greeting'>My name is {name}</h1>
      <button style={{backgroundColor: 'green', color: 'white'}}>Click Me</button>
      <button onClick={() => alert(`Button Clicked!`)}>
        Alert Me!
      </button>
    </div>
  )
}
return <h1>Not logged in.</h1>
}

export default App
