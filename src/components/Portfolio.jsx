import React from 'react';
import { ExternalLink, Layers, Monitor, Tablet } from 'lucide-react';

import eHealthCustom from '../assets/ehealth-custom.jpg';
import punaraImage from '../assets/punara.jpg';

const Portfolio = () => {
    const projects = [
        {
            title: 'PUNARA',
            subtitle: 'E-Commerce & Platform Architecture',
            desc: 'Frontend architecture, UI design optimization, scalability planning, and maintenance for a modern retail ecosystem.',
            image: punaraImage,
            tags: ['React', 'Architecture', 'UI/UX'],
            color: '#6366F1',
            link: 'https://punara.co.in'
        },
        {
            title: 'Learning Management System',
            subtitle: 'Digital Education Engineering',
            desc: 'Complete analysis, architecture design, and UI strategy for a high-performance academic e-learning platform.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2074',
            tags: ['LMS', 'System Design', 'QA'],
            color: '#A855F7'
        },
        {
            title: 'E-Health Platform',
            subtitle: 'Healthcare System Engineering',
            desc: 'Secure user interface design and efficient data workflows optimized for medical professionals and patients.',
            image: eHealthCustom,
            tags: ['Healthcare', 'Security', 'Performance'],
            color: '#22D3EE'
        }
    ];

    return (
        <section id="portfolio" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div className="section-title" data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#003300' }}>Industrial <span className="gradient-text" style={{ background: 'linear-gradient(90deg, #003300, #800040)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Benchmarks</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Transforming complex requirements into high-performance digital benchmarks.
                    </p>
                </div>

                <div className="grid" style={{ gap: '4rem' }}>
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="project-row"
                            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                alignItems: 'center',
                                gap: '4rem'
                            }}
                        >
                            {/* Device Mockup Style Area */}
                            <div className={idx % 2 === 0 ? "visual-order-1" : "visual-order-2"} style={{ position: 'relative' }}>
                                <div className="glass" style={{
                                    padding: '1.5rem',
                                    borderRadius: '40px',
                                    background: `${project.color}08`,
                                    border: `1px solid ${project.color}20`,
                                    transform: 'perspective(1000px) rotateY(-5deg)',
                                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1.03)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg)'}
                                >
                                    <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '320px' }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: `linear-gradient(to top, ${project.color}40, transparent)`
                                        }}></div>
                                    </div>
                                    {/* Mockup Overlay elements */}
                                    <div style={{ position: 'absolute', bottom: '10%', right: '-20px', display: 'flex', gap: '1rem' }}>
                                        <div className="glass" style={{ padding: '0.8rem', borderRadius: '12px', background: 'var(--bg-surface)' }}>
                                            <Monitor size={20} color={project.color} />
                                        </div>
                                        <div className="glass" style={{ padding: '0.8rem', borderRadius: '12px', background: 'var(--bg-surface)' }}>
                                            <Tablet size={20} color={project.color} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content Area */}
                            <div className={idx % 2 === 0 ? "content-order-2" : "content-order-1"}>
                                <div style={{
                                    display: 'inline-block',
                                    color: project.color,
                                    fontWeight: '700',
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.1em',
                                    marginBottom: '1rem'
                                }}>
                                    {project.subtitle}
                                </div>
                                <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--white)' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                                    {project.desc}
                                </p>
                                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                                    {project.tags.map((tag, t) => (
                                        <span key={t} className="glass" style={{
                                            padding: '0.4rem 1.2rem',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            background: 'rgba(255,255,255,0.03)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link || "#"}
                                    target={project.link ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ padding: '0.8rem 2rem' }}
                                >
                                    {project.link ? 'Visit Website' : 'View Case Study'} <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .visual-order-1, .visual-order-2 { order: 1; margin-bottom: 2rem; }
                    .content-order-1, .content-order-2 { order: 2; }
                    .project-row { grid-template-columns: 1fr !important; }
                }
            ` }} />
        </section>
    );
};

export default Portfolio;
