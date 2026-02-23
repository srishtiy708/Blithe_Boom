import useReveal from '../hooks/useReveal';

const ExecutionDomains = () => {
    useReveal();

    const domains = [
        'Software Development',
        'Software Testing',
        'Quality Control',
        'LMS Systems',
        'E-Commerce Platforms',
        'E-Health Systems',
    ];

    return (
        <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>Execution <span className="gradient-text">Domains</span></h2>
                    <p>Specialized expertise in modern technology stacks.</p>
                </div>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    {domains.map((domain, index) => (
                        <div key={index} className="glass reveal" style={{ padding: '2rem', textAlign: 'center' }}>
                            <h4 style={{ marginBottom: 0 }}>{domain}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutionDomains;
