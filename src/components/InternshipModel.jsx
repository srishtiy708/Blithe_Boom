import useReveal from '../hooks/useReveal';

const InternshipModel = () => {
    useReveal();

    return (
        <section id="internship" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-gradient"></div>
            <div className="container">
                <div className="section-title reveal">
                    <h2>Structured <span style={{ color: 'var(--primary)' }}>Internship</span> Model</h2>
                    <p>Industry-driven project execution under expert corporate mentorship.</p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', alignItems: 'center' }}>
                    <div className="reveal">
                        <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '0', right: '0', padding: '1rem', background: 'var(--primary)', color: 'white', fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '0 0 0 16px' }}>ACTIVE BATCH</div>
                            <div className="card-icon" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Program Duration</h3>
                            <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                                10 Feb 2026 – 10 Apr 2026
                            </div>
                            <p style={{ color: 'var(--text-muted)' }}>A rigorous 2-month professional engagement focused on production-grade system delivery.</p>
                        </div>
                    </div>

                    <div className="reveal" style={{ paddingLeft: '2rem' }}>
                        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {[
                                { icon: 'fas fa-code-branch', title: 'Agile Delivery', desc: 'Working in structured sprints with CI/CD workflows.' },
                                { icon: 'fas fa-user-tie', title: 'Corporate Mentorship', desc: 'Direct guidance from industry veterans and system architects.' },
                                { icon: 'fas fa-microchip', title: 'Real-world Tech', desc: 'Building scalable architectures using modern technology ecosystems.' },
                                { icon: 'fas fa-vial', title: 'Quality QA', desc: 'Implementing automated testing and code review standards.' }
                            ].map((item, idx) => (
                                <div key={idx} className="glass" style={{ padding: '1.5rem', transition: 'transform 0.3s ease' }}>
                                    <i className={`${item.icon}`} style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem', display: 'block' }}></i>
                                    <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternshipModel;
