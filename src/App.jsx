import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import InternshipModel from './components/InternshipModel';
import Mentors from './components/Mentors';
import ExecutionDomains from './components/ExecutionDomains';
import Workflow from './components/Workflow';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <InternshipModel />
            <Mentors />
            <ExecutionDomains />
            <Workflow />
            <TechStack />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
