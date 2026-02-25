import useReveal from '../hooks/useReveal';

const ExecutionDomains = () => {
    useReveal();

    const domains = [
        { title: 'Software Development', icon: 'fas fa-laptop-code' },
        { title: 'Software Testing', icon: 'fas fa-vial' },
        { title: 'Quality Control', icon: 'fas fa-shield-alt' },
        { title: 'LMS Systems', icon: 'fas fa-book-reader' },
        { title: 'E-Commerce Platforms', icon: 'fas fa-shopping-cart' },
        { title: 'E-Health Systems', icon: 'fas fa-heartbeat' }
    ];

    return (
        <section id="execution-domains" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div className="section-title reveal">
                    <div style={{
                        display: 'inline-block',
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '0.5rem 1.5rem',
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        boxShadow: '0 10px 30px var(--primary-glow)'
                    }}>
                        Execution Domains
                    </div>
                    <p>Specialized expertise in modern technology stacks and industrial solution delivery.</p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    {domains.map((domain, index) => (
                        <div key={index} className="reveal">
                            <div className="glass" style={{
                                padding: '2rem',
                                textAlign: 'center',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'var(--transition-smooth)',
                                cursor: 'default'
                            }}>
                                <i className={`${domain.icon}`} style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem' }}></i>
                                <h4 style={{ fontSize: '1rem', color: 'white', margin: 0 }}>{domain.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutionDomains;
