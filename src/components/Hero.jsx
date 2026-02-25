import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Rocket } from 'lucide-react';
import gsap from 'gsap';
import infraHero from '../assets/hero-infra.png';

const Hero = () => {
    const heroRef = useRef(null);
    const graphicRef = useRef(null);

    useEffect(() => {
        // Background subtle zoom
        gsap.to('.hero-bg', {
            scale: 1.1,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Floating graphic elements
        gsap.to('.float-el', {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.5
        });

        // Main Title Pop-in
        gsap.from('.hero-main-title', {
            scale: 0.5,
            opacity: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
            delay: 0.2
        });
    }, []);

    return (
        <section id="home" ref={heroRef} style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'var(--nav-height)'
        }}>
            {/* Background Image / Zoom */}
            <div className="hero-bg" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15,
                zIndex: -1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, margin: '0 auto' }}>
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem', width: '100%' }}>
                    {/* Left Content */}
                    <div className="hero-text">
                        <div data-aos="fade-right" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'rgba(99, 102, 241, 0.1)',
                            padding: '0.5rem 1rem',
                            borderRadius: '100px',
                            color: 'var(--primary)',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(0, 51, 0, 0.2)'
                        }}>
                            <span style={{ width: '8px', height: '8px', background: '#003300', borderRadius: '50%', display: 'inline-block' }}></span>
                            Innovative Execution Partner
                        </div>
                        <h1 className="hero-main-title hero-title-permanent" style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            marginBottom: '1.5rem',
                            position: 'relative',
                            zIndex: 10
                        }}>
                            Next-Gen Engineering <br />
                            Digital Architecture <br />
                            for High-Performance Ventures
                        </h1>
                        <p style={{ color: '#003300', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '540px', fontWeight: '500' }} data-aos="fade-up" data-aos-delay="200">
                            Delivering industrial-grade software solutions with scalable engineering
                            excellence. We bridge visionary innovation with production-ready execution.
                        </p>

                        <div className="hero-btns" style={{
                            display: 'flex',
                            gap: '1.2rem',
                            flexWrap: 'wrap'
                        }} data-aos="fade-up" data-aos-delay="300">
                            <button className="btn btn-primary" style={{ padding: '1rem 2.2rem', color: 'white', background: '#003300' }}>Scale Solutions <Rocket size={18} color="white" /></button>
                            <button className="btn btn-outline" style={{ borderColor: '#003300', color: '#003300' }}>View Portfolio</button>
                        </div>
                    </div>

                    {/* Right Illustration Area */}
                    <div className="hero-visual" style={{ position: 'relative' }} data-aos="fade-left" data-aos-delay="400">
                        {/* Soft Cream Tech Glow */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%',
                            height: '120%',
                            background: 'radial-gradient(circle, rgba(176, 141, 87, 0.08) 0%, transparent 60%)',
                            zIndex: -1,
                            pointerEvents: 'none'
                        }}></div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <img
                                src={infraHero}
                                alt="Abstract Tech Illustration"
                                style={{
                                    width: '100%',
                                    borderRadius: '30px',
                                    boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5)',
                                    border: '1px solid var(--glass-border)'
                                }}
                            />
                            {/* Floating elements */}
                        </div>
                        {/* Static Glows */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
