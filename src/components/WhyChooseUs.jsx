import useReveal from '../hooks/useReveal';

const WhyChooseUs = () => {
    useReveal();

    const reasons = [
        {
            title: 'Process-Driven Execution',
            desc: 'We follow a structured horizontal workflow that ensures transparency and measurable results at every stage.',
            icon: 'fas fa-project-diagram'
        },
        {
            title: 'Scalable Architecture',
            desc: 'Every system we build is designed for growth, utilizing cloud-native principles and modular design patterns.',
            icon: 'fas fa-expand-arrows-alt'
        },
        {
            title: 'Quality First Mindset',
            desc: 'From automated testing to rigorous code reviews, we prioritize excellence over speed, ensuring long-term stability.',
            icon: 'fas fa-shield-alt'
        },
        {
            title: 'Expert Mentorship',
            desc: 'Our academic-industry collaboration model ensures that your project is overseen by seasoned veterans and experts.',
            icon: 'fas fa-chalkboard-teacher'
        }
    ];

    return (
        <section id="why-us" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-gradient"></div>
            <div className="container">
                <div className="section-title reveal">
                    <h2>Enterprise <span style={{ color: 'var(--primary)' }}>Values</span></h2>
                    <p>Technological partnership built on process excellence and engineering depth.</p>
                </div>

                <div className="grid">
                    {reasons.map((reason, index) => (
                        <div key={index} className="card-3d reveal">
                            <div className="card-3d-inner glass" style={{ padding: '3rem', height: '100%' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    marginBottom: '2rem'
                                }}>
                                    <i className={reason.icon}></i>
                                </div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'white' }}>{reason.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{reason.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
