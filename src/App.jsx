import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Workflow from './components/Workflow.jsx';
import TechStack from './components/TechStack.jsx';
import Mentors from './components/Mentors.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <div className="app-wrapper">
            <div className="bg-mesh"></div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Workflow />
            <TechStack />
            <Mentors />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
