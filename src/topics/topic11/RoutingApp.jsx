
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';


// Routing enables navigation between different pages or 
// components without reloading the entire page.

// - User Experience
// - Component Seperation
// - URL Management

/*
 / -> Home
 /about -> About
 /contact -> Contact
*/


function RoutingApp() {
    return(
       
         <div className='min-h-screen pt-30 bg-zinc-800'>
            <nav className='bg-black '>
                <ul className='flex justify-center space-x-6'>
                    <li><Link className=' hover:text-yellow-600 font-medium transition duration-300'
                     to="/topics/routing/">Home</Link></li>

                    <li><Link className='hover:text-yellow-600 font-medium transition duration-300'
                     to="/topics/routing/about">About</Link></li>

                    <li><Link className='hover:text-yellow-600 font-medium transition duration-300'
                     to="/topics/routing/contact">Contact</Link></li>
                     
                </ul>
            </nav>
        
            <div className='container mx-auto py-8'>
            <Routes>
                <Route path='/' element={<Home />} />
                 <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='*' element={<NotFound/>} />
            </Routes>
            </div>
            </div>
      
    )
}
export default RoutingApp;