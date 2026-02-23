import useReveal from '../hooks/useReveal';

const Portfolio = () => {
    useReveal();

    const projects = [
        {
            title: 'PUNARA Website',
            category: 'Ongoing Project',
            tagColor: 'var(--primary)',
            tagBg: 'rgba(0, 210, 255, 0.1)',
            border: 'var(--primary)',
            description: 'Development and continuous technical support under structured internship model.',
            services: ['Frontend architecture', 'UI/UX optimization', 'Platform scalability', 'Website maintenance'],
        },
        {
            title: 'LMS Development',
            category: 'System Analysis',
            tagColor: 'var(--secondary)',
            tagBg: 'rgba(112, 0, 255, 0.1)',
            border: 'var(--secondary)',
            description: 'System analysis and architecture development for academic deployment.',
            services: ['Requirement gathering', 'Workflow mapping', 'UI design', 'Functional testing'],
        },
        {
            title: 'E-Health Platform',
            category: 'Healthcare',
            tagColor: 'var(--accent)',
            tagBg: 'rgba(255, 215, 0, 0.1)',
            border: 'var(--accent)',
            description: 'Design & development of structured healthcare solutions.',
            services: ['Secure user access', 'Scalable platform', 'Clean architecture'],
        },
    ];

    return (
        <section id="portfolio" className="section-padding">
            <div className="container">
                <div className="section-title reveal">
                    <h2>Project <span className="gradient-text">Assignments</span> Portfolio</h2>
                    <p>Projects executed under Blithe Boom System Pvt. Ltd.</p>
                </div>

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="portfolio-item glass reveal"
                        style={{ padding: '3rem', marginBottom: index === projects.length - 1 ? '0' : '3rem', borderLeft: `5px solid ${project.border}` }}
                    >
                        <div className="grid" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
                            <div>
                                <span className="tag" style={{ background: project.tagBg, color: project.tagColor }}>{project.category}</span>
                                <h3 style={{ fontSize: '2rem', margin: '1rem 0' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{project.description}</p>
                            </div>
                            <div>
                                <h4>Services Provided:</h4>
                                <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    {project.services.map((service, sIndex) => (
                                        <li key={sIndex}>
                                            <i className="fas fa-check-circle" style={{ color: project.border }}></i> {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
