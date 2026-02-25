import React from 'react';
import { Cpu, Layout, Maximize, Zap, Code2, Database, Globe2, Layers } from 'lucide-react';

const TechStack = () => {
    const stack = [
        { name: 'Frontend Architecture', icon: <Layout size={32} />, tech: 'React / Next.js / Vite', desc: 'Modular components and state management.' },
        { name: 'UI Optimization', icon: <Zap size={32} />, tech: 'Modern CSS / Tailwind', desc: 'High-performance, smooth interactions.' },
        { name: 'Scalable Strategy', icon: <Maximize size={32} />, tech: 'Micro-frontends / API', desc: 'Design for growth and evolution.' },
        { name: 'System Logic', icon: <Code2 size={32} />, tech: 'TypeScript / Node.js', desc: 'Type-safe, robust backend logic.' }
    ];

    const techIcons = [
        { name: 'HTML5', color: '#E34F26' },
        { name: 'CSS3', color: '#1572B6' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'React', color: '#61DAFB' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Node.js', color: '#339933' }
    ];

    return (
        <section id="tech-stack" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
                    {/* Left side: Grid of core expertise */}
                    <div className="tech-content" data-aos="fade-right">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Technologies We <span className="gradient-text">Master</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '3rem' }}>
                            Leveraging a modern, standardized technology ecosystem to build
                            infrastructure-grade digital assets.
                        </p>

                        <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                            {stack.map((item, idx) => (
                                <div key={idx} className="glass corporate-card" style={{ padding: '1.5rem', gap: '0.75rem' }}>
                                    <div className="card-icon" style={{ width: '45px', height: '45px', fontSize: '1.2rem', color: 'var(--primary)' }}>
                                        {item.icon}
                                    </div>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--white)' }}>{item.name}</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Abstract Icon Cloud */}
                    <div className="tech-visual" data-aos="zoom-in" data-aos-delay="200" style={{ position: 'relative' }}>
                        <div className="glass" style={{
                            width: '100%',
                            aspectRatio: '1',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(99, 102, 241, 0.03)',
                            position: 'relative'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <Cpu size={64} color="var(--primary)" className="float-el" />
                                <div style={{ marginTop: '1rem', fontWeight: '800', fontSize: '1.2rem', color: 'var(--white)', letterSpacing: '0.1em' }}>CORE ENGINE</div>
                            </div>

                            {/* Orbiting Tech Badges */}
                            {techIcons.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="glass float-el"
                                    style={{
                                        position: 'absolute',
                                        padding: '0.75rem 1.25rem',
                                        borderRadius: '100px',
                                        fontSize: '0.8rem',
                                        fontWeight: '700',
                                        color: 'var(--white)',
                                        border: `1px solid ${tech.color}40`,
                                        background: `${tech.color}10`,
                                        top: `${50 + 40 * Math.sin(idx * (2 * Math.PI / 6))}%`,
                                        left: `${50 + 40 * Math.cos(idx * (2 * Math.PI / 6))}%`,
                                        transform: 'translate(-50%, -50%)',
                                        boxShadow: `0 0 20px ${tech.color}20`
                                    }}
                                >
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .tech-visual .float-el {
                    transition: var(--transition);
                }
                .tech-visual .float-el:hover {
                    background: var(--primary) !important;
                    color: white !important;
                    transform: translate(-50%, -60%) scale(1.1) !important;
                }
            ` }} />
        </section>
    );
};

export default TechStack;
