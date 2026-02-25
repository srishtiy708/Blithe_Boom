import React, { useEffect } from 'react';
import { Search, Code, CheckCircle, Rocket, LifeBuoy } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
    const steps = [
        {
            title: 'Requirement Analysis',
            desc: 'In-depth consultation to bridge the gap between business vision and technical roadmap.',
            icon: <Search size={24} />,
            color: '#6366F1'
        },
        {
            title: 'System Architecture',
            desc: 'Designing scalable, secure, and modular foundations for high-performance execution.',
            icon: <Code size={24} />,
            color: '#A855F7'
        },
        {
            title: 'Structured Development',
            desc: 'Phased coding cycles using modern tech stacks and production-grade engineering standards.',
            icon: <Code size={24} />,
            color: '#22D3EE'
        },
        {
            title: 'Quality Engineering',
            desc: 'Rigorous automated testing and compliance checks to ensure platform reliability.',
            icon: <CheckCircle size={24} />,
            color: '#10B981'
        },
        {
            title: 'Deployment & Support',
            desc: 'Seamless production delivery and continuous optimization for evolving platforms.',
            icon: <Rocket size={24} />,
            color: '#F59E0B'
        }
    ];

    useEffect(() => {
        // Line drawing animation
        gsap.fromTo('.workflow-line',
            { height: 0 },
            {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.workflow-container',
                    start: 'top 30%',
                    end: 'bottom 70%',
                    scrub: 1
                }
            }
        );
    }, []);

    return (
        <section id="workflow" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="section-title" data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(34, 211, 238, 0.1)',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: 'var(--neon-cyan)',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        Operational Blueprint
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Development <span className="gradient-text">Process</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        A systematic, process-driven execution framework ensuring measurable results at every stage.
                    </p>
                </div>

                <div className="workflow-container" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line Connector */}
                    <div style={{
                        position: 'absolute',
                        left: '40px',
                        top: 0,
                        width: '2px',
                        height: '100%',
                        background: 'rgba(67, 20, 7, 0.05)',
                        zIndex: 0
                    }}></div>
                    <div className="workflow-line" style={{
                        position: 'absolute',
                        left: '40px',
                        top: 0,
                        width: '2px',
                        background: '#003300',
                        zIndex: 1,
                        boxShadow: '0 0 10px rgba(0, 51, 0, 0.1)'
                    }}></div>

                    {/* Workflow Steps */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {steps.map((step, idx) => (
                            <div key={idx} className="workflow-step" style={{ display: 'flex', gap: '3rem', position: 'relative', zIndex: 2 }}>
                                {/* Node */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    background: 'rgba(255, 255, 255, 0.5)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: `2px solid #003300`,
                                    color: '#003300',
                                    flexShrink: 0,
                                    boxShadow: `0 0 20px rgba(0, 51, 0, 0.05)`,
                                    transition: 'var(--transition)'
                                }} className="workflow-node">
                                    {React.cloneElement(step.icon, { color: '#003300' })}
                                </div>

                                {/* Content */}
                                <div className="workflow-content" style={{ paddingTop: '1rem' }} data-aos="fade-left" data-aos-delay={idx * 100}>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(0, 51, 0, 0.05)',
                                        borderRadius: '50px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        color: '#003300',
                                        marginBottom: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        Phase {idx + 1}
                                    </div>
                                    <h3 style={{ fontSize: '1.75rem', color: '#003300', marginBottom: '0.75rem' }}>{step.title}</h3>
                                    <p style={{ color: '#003300', lineHeight: 1.6, maxWidth: '600px', fontWeight: '500' }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 640px) {
                    .workflow-step { gap: 1.5rem !important; }
                    .workflow-step > div:first-child { width: 40px !important; height: 40px !important; }
                    .workflow-step svg { width: 16px !important; height: 16px !important; }
                    .workflow-line, .workflow-container > div:first-child { left: 20px !important; }
                }
                .workflow-step:hover .workflow-node {
                    transform: scale(1.1);
                    border-color: var(--primary);
                    box-shadow: 0 0 40px rgba(249, 115, 22, 0.2);
                }
            ` }} />
        </section>
    );
};

export default Workflow;
