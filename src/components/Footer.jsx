import React from 'react';
import { Linkedin, Twitter, Github, ChevronRight, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Footer = () => {
    return (
        <footer style={{ background: '#FDFCE8', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '6rem', paddingBottom: '3rem' }}>
            <div className="container">
                <div className="grid grid-4" style={{ gap: '2rem', marginBottom: '4rem' }}>
                    {/* Brand Column */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: '#003300',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#003300' }}>Blithe<span style={{ color: '#003300' }}>Boom</span></span>
                        </div>
                        <p style={{ color: '#003300', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem', fontWeight: '500' }}>
                            An enterprise-grade technology execution venture specializing in scalable digital
                            architectures and industrial solution delivery.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {[Linkedin, Twitter, Github].map((Icon, idx) => (
                                <a key={idx} href="#" className="glass" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#003300', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.4)' }}>
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 style={{ color: '#003300', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: '700' }}>Solutions</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Enterprise Software', 'E-Learning Systems', 'Healthcare Platforms', 'Cloud Engineering'].map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" style={{ color: '#003300', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
                                        <ChevronRight size={14} color="#003300" /> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Access Column */}
                    <div>
                        <h4 style={{ color: '#003300', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: '700' }}>Professional</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Our Identity', 'Project Engagements', 'Process Blueprint', 'Strategic Mentors'].map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" style={{ color: '#003300', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
                                        <ChevronRight size={14} color="#003300" /> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Registration Column */}
                    <div className="glass" style={{ padding: '2rem', borderRadius: '24px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)' }}>
                        <h4 style={{ color: '#003300', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '700' }}>Registered Entity</h4>
                        <div style={{ color: '#003300', fontSize: '0.8rem', lineHeight: 1.6, fontWeight: '500' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                <MapPin size={14} color="#003300" />
                                <span>SRMS CET, Bareilly, UP, India</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                <Mail size={14} color="#003300" />
                                <span>contact@blitheboom.com</span>
                            </div>
                            <div style={{ fontWeight: '700', color: '#003300', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1rem' }}>
                                CIN: U72200UP2021PTC147852
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                        © 2026 Blithe Boom System Pvt. Ltd. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none' }}>Governance Standards</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
