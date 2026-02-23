import useReveal from '../hooks/useReveal';

const TechStack = () => {
    useReveal();

    const technologies = [
        { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
        { name: 'Modern Frameworks', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Scalable Architecture', icon: 'fas fa-layer-group', color: 'var(--primary)' },
    ];

    return (
        <section className="section-padding" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>Technology <span className="gradient-text">Stack</span></h2>
                    <p>Built with stability and scalability in mind.</p>
                </div>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', textAlign: 'center' }}>
                    {technologies.map((tech, index) => (
                        <div key={index} className="reveal">
                            <i className={`${tech.icon}`} style={{ fontSize: '3rem', color: tech.color, marginBottom: '1rem' }}></i>
                            <h4>{tech.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
