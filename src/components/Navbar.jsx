import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Our Services', href: '#services' },
        { name: 'Projects', href: '#portfolio' },
        { name: 'Process', href: '#workflow' },
        { name: 'Mentors', href: '#mentors' },
    ];

    return (
        <nav style={{
            background: isScrolled ? 'rgba(253, 252, 232, 0.95)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(16px)' : 'none',
            borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
            transition: 'var(--transition)',
            height: 'var(--nav-height)',
            display: 'flex',
            alignItems: 'center',
            zIndex: 2000,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            width: '100%'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                transition: 'padding 0.4s ease'
            }}>
                {/* Logo Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', flexShrink: 1, minWidth: 0 }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--primary)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        letterSpacing: '-0.03em',
                        color: 'var(--primary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        BlitheBoom
                    </span>
                </div>

                {/* Navigation Group (Right Side) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                    {/* Desktop Menu */}
                    <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
                        {navLinks.map((link, idx) => (
                            <a key={idx} href={link.href} style={{
                                fontSize: '0.95rem',
                                fontWeight: '500',
                                color: 'var(--text-muted)',
                                textDecoration: 'none',
                                transition: 'var(--transition)'
                            }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button (Desktop) */}
                    <div className="desktop-nav" style={{ display: 'none' }}>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '0.7rem 1.6rem', fontSize: '0.9rem' }}>
                            Get Started <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="mobile-toggle" style={{
                        cursor: 'pointer',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center'
                    }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 'var(--nav-height)',
                    left: 0,
                    width: '100%',
                    height: 'calc(100vh - var(--nav-height))',
                    background: 'var(--bg-dark)',
                    zIndex: 1999,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2rem',
                    gap: '2rem'
                }}>
                    {navLinks.map((link, idx) => (
                        <a key={idx} href={link.href} onClick={() => setIsMenuOpen(false)} style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: 'var(--white)',
                            textDecoration: 'none'
                        }}>
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Get Started <ArrowRight size={18} />
                    </a>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 868px) {
                    .desktop-nav { display: flex !important; }
                    .mobile-toggle { display: none !important; }
                }
            ` }} />
        </nav>
    );
};

export default Navbar;
