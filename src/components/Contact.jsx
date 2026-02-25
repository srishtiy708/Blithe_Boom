import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
    const [focused, setFocused] = useState(null);

    return (
        <section id="contact" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div className="grid grid-2" style={{ gap: '5rem', alignItems: 'start' }}>

                    {/* Left: Contact Info */}
                    <div className="contact-info" data-aos="fade-right">
                        <div style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem' }}>
                            Get In Touch
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Let's Build Something <br /><span className="gradient-text">Exceptional</span> Together.</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: '480px' }}>
                            We are available for corporate partnerships, technical consulting, and enterprise project engagements.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="contact-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div className="card-icon" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Official Enquiry</div>
                                    <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>contact@blitheboom.com</div>
                                </div>
                            </div>

                            <div className="contact-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div className="card-icon" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Executive Office</div>
                                    <div style={{ fontWeight: '500', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                        Directorate of Research & Development,<br />
                                        SRMS CET, Bareilly, UP, India
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
                            {[Linkedin, Twitter, Github].map((Icon, i) => (
                                <a key={i} href="#" className="glass" style={{
                                    width: '45px',
                                    height: '45px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--white)',
                                    transition: 'var(--transition)'
                                }} onMouseEnter={(e) => e.target.style.background = 'var(--primary)'}
                                    onMouseLeave={(e) => e.target.style.background = 'var(--card-bg)'}>
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="contact-form" data-aos="fade-left" data-aos-delay="200">
                        <div className="glass" style={{ padding: '3rem', borderRadius: '32px' }}>
                            <form style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            onFocus={() => setFocused('name')}
                                            onBlur={() => setFocused(null)}
                                            style={{
                                                width: '100%',
                                                padding: '1.2rem',
                                                background: '#FFFFFF',
                                                border: focused === 'name' ? '1px solid #003300' : '1px solid rgba(0, 0, 0, 0.1)',
                                                borderRadius: '16px',
                                                color: '#003300',
                                                outline: 'none',
                                                transition: 'var(--transition)'
                                            }}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            onFocus={() => setFocused('email')}
                                            onBlur={() => setFocused(null)}
                                            style={{
                                                width: '100%',
                                                padding: '1.2rem',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: focused === 'email' ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                                borderRadius: '16px',
                                                color: 'var(--white)',
                                                outline: 'none',
                                                transition: 'var(--transition)'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <select
                                        onFocus={() => setFocused('subject')}
                                        onBlur={() => setFocused(null)}
                                        style={{
                                            width: '100%',
                                            padding: '1.2rem',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: focused === 'subject' ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                            borderRadius: '16px',
                                            color: 'var(--white)',
                                            outline: 'none',
                                            transition: 'var(--transition)'
                                        }}
                                    >
                                        <option style={{ background: 'var(--bg-dark)' }}>Enterprise Solution Query</option>
                                        <option style={{ background: 'var(--bg-dark)' }}>Academic Collaboration</option>
                                        <option style={{ background: 'var(--bg-dark)' }}>Strategic Consulting</option>
                                        <option style={{ background: 'var(--bg-dark)' }}>Other Enquiries</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <textarea
                                        placeholder="Project Description"
                                        rows="5"
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused(null)}
                                        style={{
                                            width: '100%',
                                            padding: '1.2rem',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: focused === 'message' ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                            borderRadius: '16px',
                                            color: 'var(--white)',
                                            outline: 'none',
                                            resize: 'none',
                                            gridColumn: 'span 2',
                                            transition: 'var(--transition)'
                                        }}
                                    ></textarea>
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Glow */}
            <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
        </section>
    );
};

export default Contact;
