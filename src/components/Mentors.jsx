import React from 'react';
import { Award, GraduationCap, Laptop, Landmark } from 'lucide-react';

const Mentors = () => {
    const mentors = [
        { name: 'Dr. Shailesh Saxena', role: 'Dean, CET&R', icon: <Landmark size={24} /> },
        { name: 'Dr. Mohd. Danish Chishti', role: 'Associate Professor', icon: <GraduationCap size={24} /> },
        { name: 'Er. Ashish Agarwal', role: 'Assistant Professor, IT', icon: <Laptop size={24} /> },
        { name: 'Mr. Ankur Gupta', role: 'Assistant Professor, CA', icon: <Award size={24} /> }
    ];

    return (
        <section id="mentors" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                {/* Header Content */}
                <div className="section-title" style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div data-aos="fade-right">
                            <div style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem' }}>
                                Our Experts
                            </div>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>Our Experts</h2>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="200">
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
                                Blithe Boom System partners with academic mentors and industry professionals
                                to deliver structured execution workflows for real-world project delivery
                                and digital engineering excellence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mentors Grid */}
                <div className="grid grid-4" style={{ gap: '2rem' }}>
                    {mentors.map((mentor, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            className="mentor-card-premium glass"
                            style={{
                                padding: '3rem 2rem',
                                textAlign: 'center',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.5rem',
                                transition: 'var(--transition)',
                                cursor: 'default'
                            }}
                        >
                            {/* Icon Container with Glow */}
                            <div className="mentor-icon-outer" style={{
                                width: '90px',
                                height: '90px',
                                borderRadius: '24px',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                transition: 'var(--transition)'
                            }}>
                                <div className="mentor-icon-inner" style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    zIndex: 2
                                }}>
                                    {React.cloneElement(mentor.icon, { size: 32 })}
                                </div>
                                <div className="icon-glow" style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '100%',
                                    height: '100%',
                                    background: 'var(--primary)',
                                    borderRadius: '50%',
                                    filter: 'blur(30px)',
                                    opacity: 0,
                                    transition: 'var(--transition)',
                                    zIndex: 1
                                }}></div>
                            </div>

                            {/* Text Content */}
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    color: 'var(--white)',
                                    marginBottom: '0.5rem',
                                    fontWeight: '700'
                                }}>{mentor.name}</h3>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--primary)',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    opacity: 0.9
                                }}>{mentor.role}</div>
                            </div>

                            {/* Decorative Elements */}
                            <div style={{
                                marginTop: 'auto',
                                width: '40px',
                                height: '3px',
                                background: 'var(--primary)',
                                borderRadius: '2px',
                                transition: 'var(--transition)'
                            }} className="mentor-underline"></div>
                        </div>
                    ))}
                </div>

                {/* Visual Accent */}
                <div data-aos="zoom-in" data-aos-delay="500" style={{
                    marginTop: '5rem',
                    padding: '3rem',
                    background: 'rgba(99, 102, 241, 0.03)',
                    borderRadius: '32px',
                    textAlign: 'center',
                    border: '1px solid var(--glass-border)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.05 }}></div>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#003300',
                        fontWeight: '800',
                        fontFamily: 'cursive',
                        fontStyle: 'italic',
                        position: 'relative',
                        zIndex: 1,
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        "Bridging the gap between academic innovation and commercial engineering execution standards through strategic mentorship and industrial collaboration."
                    </p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .mentor-card-premium:hover {
                    transform: translateY(-10px) perspective(1000px) rotateX(2deg);
                    border-color: #003300 !important;
                    background: rgba(255, 255, 255, 0.5);
                }
                .mentor-card-premium:hover .mentor-icon-outer {
                    background: #003300;
                    border-color: #003300;
                    transform: scale(1.1) rotate(5deg);
                }
                .mentor-card-premium:hover .mentor-icon-inner {
                    color: white;
                }
                .mentor-card-premium:hover .icon-glow {
                    opacity: 0.1;
                    background: #003300;
                }
                .mentor-card-premium:hover .mentor-underline {
                    width: 100%;
                    background: linear-gradient(to right, transparent, #003300, transparent);
                }
            ` }} />
        </section>
    );
};

export default Mentors;
