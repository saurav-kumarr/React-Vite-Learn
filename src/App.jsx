import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import PortfolioWeb_Project from './topics/project1_portfolioWeb/PortfolioWeb';
//import One_Intro_Learn from "./topics/topic1/Intro_Learn";
import { Suspense, lazy } from "react";
import { topics } from "./topics/topicsConfig";
import './App.css'




function App() {
  
    return (
    <Suspense fallback={<div>Loading...</div>}>
      <nav className='navbar'>
        <Link to="/" className='nav-link'>Home</Link> | <Link to="/topics" className='nav-link'>Topics</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome! Choose a topic</h1>} />

        {/* Topics Index Page */}
        <Route 
          path="/topics"
          element={
            <ul>
              {topics.map((t) => (
                <li key={t.path}>
                  <Link to={`/topics/${t.path}`}>{t.name}</Link>
                </li>
              ))}
            </ul>
          }
        />

        {/* Dynamically create routes */}
        {topics.map((t) => {
          const Component = lazy(t.component);
          return (
            <Route
              key={t.path}
              path={`/topics/${t.path}`}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );

  
}

export default App
