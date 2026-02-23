import useReveal from '../hooks/useReveal';

const InternshipModel = () => {
    useReveal();

    return (
        <section className="section-padding" style={{ background: 'linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.05))' }}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>Structured <span className="gradient-text">Internship</span> Model</h2>
                    <p>Industry-driven project execution under faculty mentorship.</p>
                </div>
                <div className="grid reveal">
                    <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
                        <i className="fas fa-calendar-alt" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}></i>
                        <h3>Duration</h3>
                        <p style={{ fontSize: '1.5rem', fontWeight: 700, margin: '1rem 0' }}>10 Feb 2026 – 10 Apr 2026</p>
                        <p style={{ color: 'var(--text-muted)' }}>A rigorous 2-month professional engagement.</p>
                    </div>
                    <div className="glass" style={{ padding: '3rem' }}>
                        <h3>Mentorship Includes:</h3>
                        <ul style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                            <li style={{ marginBottom: '1rem' }}><i className="fas fa-user-tie" style={{ marginRight: '15px', color: 'var(--primary)' }}></i> Faculty supervision</li>
                            <li style={{ marginBottom: '1rem' }}><i className="fas fa-lightbulb" style={{ marginRight: '15px', color: 'var(--primary)' }}></i> Domain-specific guidance</li>
                            <li style={{ marginBottom: '1rem' }}><i className="fas fa-file-contract" style={{ marginRight: '15px', color: 'var(--primary)' }}></i> Structured reporting</li>
                            <li><i className="fas fa-briefcase" style={{ marginRight: '15px', color: 'var(--primary)' }}></i> Professional workflow discipline</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternshipModel;
