import useReveal from '../hooks/useReveal';

const About = () => {
    useReveal();

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="grid" style={{ alignItems: 'center' }}>
                    <div className="reveal">
                        <h2 className="gradient-text">About Blithe Boom System</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            Blithe Boom System Pvt. Ltd. is a technology-driven venture focused on structured software development, system analysis, LMS platforms, e-health solutions, and enterprise website development. The company collaborates with academic institutions to execute real-world projects under guided mentorship.
                        </p>
                        <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                            <div className="glass" style={{ padding: '1rem', borderLeft: '3px solid var(--primary)' }}>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Focus Area</h4>
                                <p style={{ fontWeight: 600 }}>Software Development</p>
                            </div>
                            <div className="glass" style={{ padding: '1rem', borderLeft: '3px solid var(--secondary)' }}>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Focus Area</h4>
                                <p style={{ fontWeight: 600 }}>LMS Analysis</p>
                            </div>
                            <div className="glass" style={{ padding: '1rem', borderLeft: '3px solid var(--primary)' }}>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Focus Area</h4>
                                <p style={{ fontWeight: 600 }}>Web Maintenance</p>
                            </div>
                            <div className="glass" style={{ padding: '1rem', borderLeft: '3px solid var(--secondary)' }}>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Focus Area</h4>
                                <p style={{ fontWeight: 600 }}>E-Health Systems</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass reveal" style={{ padding: '3rem', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.1), transparent)' }}>
                        <i className="fas fa-microchip" style={{ fontSize: '5rem', color: 'var(--primary)', marginBottom: '2rem' }}></i>
                        <h3>Technological Excellence</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Guided by structured academic-industry collaboration.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
