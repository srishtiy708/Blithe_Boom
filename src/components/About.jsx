import React from 'react';
import { Target, Shield, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    {/* Left Side: Visual / Illustration */}
                    <div className="about-visual" data-aos="fade-right">
                        <div style={{ position: 'relative' }}>
                            <div className="glass" style={{ padding: '0.5rem', borderRadius: '30px', overflow: 'hidden' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2232"
                                    alt="System Architecture Diagram"
                                    style={{
                                        width: '100%',
                                        height: '500px',
                                        objectFit: 'cover',
                                        borderRadius: '24px',
                                    }}
                                />
                            </div>

                            {/* Decorative Parallax elements */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="400"
                                style={{
                                    position: 'absolute',
                                    bottom: '-30px',
                                    right: '-30px',
                                    width: '160px',
                                    height: '160px',
                                    background: 'var(--primary)',
                                    borderRadius: '50%',
                                    opacity: 0.1,
                                    filter: 'blur(40px)',
                                    zIndex: -1
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="about-content">
                        <div data-aos="fade-up" style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem' }}>
                            Our Foundation
                        </div>
                        <h2 className="hero-title-permanent" data-aos="fade-up" data-aos-delay="100" style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: 1.2 }}>
                            Strategic <span className="gradient-text">Digital Execution</span> <br />
                            for Complex Challenges.
                        </h2>
                        <div data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)' }}>
                            <p>
                                Blithe Boom System Pvt. Ltd. is a structured technology venture focused on
                                delivering digital engineering and software development services.
                                We specialize in enterprise web architecture, learning management systems,
                                e-health solutions, and platform maintenance.
                            </p>
                            <p>
                                Our approach combines process-driven execution, performance optimization,
                                and user-centric designs to deliver scalable and reliable digital systems
                                serving both corporate and academic clients.
                            </p>
                        </div>

                        {/* Feature Blocks */}
                        <div className="grid grid-2" style={{ marginTop: '3rem', gap: '1.5rem' }}>
                            <div data-aos="zoom-in" data-aos-delay="300" className="glass corporate-card" style={{ padding: '1.5rem', gap: '1rem' }}>
                                <div className="card-icon" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>
                                    <Target size={20} />
                                </div>
                                <h4 style={{ fontSize: '1.1rem' }}>Precision</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Meticulous attention to architectural detail and system logic.</p>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="400" className="glass corporate-card" style={{ padding: '1.5rem', gap: '1rem' }}>
                                <div className="card-icon" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>
                                    <Shield size={20} />
                                </div>
                                <h4 style={{ fontSize: '1.1rem' }}>Reliability</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Battle-tested solutions designed for high-uptime environments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
