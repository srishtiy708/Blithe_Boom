import useReveal from '../hooks/useReveal';

const Mentors = () => {
    useReveal();

    const mentorsList = [
        { name: 'Dr. Shailesh Saxena', role: 'Dean, CET&R', color: 'var(--primary)' },
        { name: 'Dr. Mohd. Danish Chishti', role: 'Academic Mentor', color: 'var(--secondary)' },
        { name: 'Er. Ashish Agarwal', role: 'Technical Mentor', color: 'var(--primary)' },
        { name: 'Mr. Ankur Gupta', role: 'Strategic Mentor', color: 'var(--secondary)' },
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div className="section-title reveal">
                    <h2>Mentors & <span className="gradient-text">Academic</span> Collaboration</h2>
                    <p>Expert guidance driving innovation and excellence.</p>
                </div>
                <div className="grid">
                    {mentorsList.map((mentor, index) => (
                        <div key={index} className="card glass reveal" style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: mentor.color, borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifySpaceAround: 'center', justifyContent: 'center' }}>
                                <i className={`fas ${mentor.role.includes('Dean') ? 'fa-user-graduate' : 'fa-user-tie'}`} style={{ fontSize: '2rem', color: 'white' }}></i>
                            </div>
                            <h3>{mentor.name}</h3>
                            <p style={{ color: mentor.color }}>{mentor.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mentors;
