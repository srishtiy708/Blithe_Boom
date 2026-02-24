import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-grid"></div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-heading fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Engineering Practical <span className="gradient-text">Digital Solutions</span> Through Structured Innovation
                    </h1>
                    <p className="hero-subheading fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Blithe Boom System Pvt. Ltd. delivers software development, LMS solutions, e-health platforms, and enterprise website systems through structured academic-industry collaboration.
                    </p>
                    <div className="cta-group fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <a href="#services" className="btn btn-primary">Explore Our Services</a>
                        <a href="#portfolio" className="btn btn-outline">View Projects</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
