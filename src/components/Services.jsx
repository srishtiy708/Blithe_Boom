import useReveal from '../hooks/useReveal';

const Services = () => {
    useReveal();

    const services = [
        {
            icon: 'fas fa-code',
            title: 'Software Development',
            description: 'Custom web platforms, enterprise systems, and structured development lifecycle management.',
        },
        {
            icon: 'fas fa-graduation-cap',
            title: 'LMS Analysis & Development',
            description: 'Learning Management Systems designed for scalable academic and enterprise use.',
        },
        {
            icon: 'fas fa-globe',
            title: 'Website Development',
            description: 'Design, development, and continuous maintenance for platforms like Punara and Pious Biosphere.',
        },
        {
            icon: 'fas fa-heartbeat',
            title: 'E-Health Solutions',
            description: 'Digital healthcare platforms and system-level architecture for health-based services.',
        },
        {
            icon: 'fas fa-vial',
            title: 'Quality Assurance',
            description: 'Structured testing workflows ensuring reliability, security, and high performance.',
        },
        {
            icon: 'fas fa-tools',
            title: 'Maintenance & Support',
            description: 'Continuous technical support and updates for enterprise-level web applications.',
        },
    ];

    return (
        <section id="services" className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>Core <span className="gradient-text">Services</span></h2>
                    <p>Delivering high-performance digital solutions across domains.</p>
                </div>
                <div className="grid">
                    {services.map((service, index) => (
                        <div key={index} className="card glass reveal">
                            <i className={`${service.icon} card-icon gradient-text`}></i>
                            <h3>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
