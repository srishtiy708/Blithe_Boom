import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Sticky navbar
            setIsScrolled(window.scrollY > 50);

            // Active link tracking
            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Services', href: '#services', id: 'services' },
        { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav id="navbar" className={`${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
            <div className="container nav-container">
                <div className="logo-wrapper">
                    <img src={logo} alt="Blithe Boom System Logo" />
                    <span className="logo-text gradient-text">Blithe Boom</span>
                </div>

                {/* Hamburger Menu Icon */}
                <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                className={activeSection === link.id ? 'active' : ''}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
