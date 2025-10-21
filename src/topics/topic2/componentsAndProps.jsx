import Header from './Header';
import About from './About';
import ProjectList from './ProjectList';
import Contact from './Contact';
import Footer from './Footer';
import './PortfolioWebComp.css';

function MyButton() {
    return (
       <div>
        <Header />
        <About />
        <ProjectList />
        <Contact />
        <Footer />
       </div>
    );
}



export default MyButton;