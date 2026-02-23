import { useEffect } from 'react';
import useReveal from '../hooks/useReveal';

const Workflow = () => {
    useReveal();

    useEffect(() => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.5 });

        timelineItems.forEach(item => timelineObserver.observe(item));

        return () => {
            timelineItems.forEach(item => timelineObserver.unobserve(item));
        };
    }, []);

    const steps = [
        { title: 'Requirement Analysis', description: 'In-depth gathering of specifications and stakeholder needs.' },
        { title: 'System Design', description: 'Architecting scalable and secure structural blueprints.' },
        { title: 'Development', description: 'Agile implementation using modern frameworks and best practices.' },
        { title: 'Testing', description: 'Rigorous quality assurance and performance validation.' },
        { title: 'Deployment', description: 'Structured launch and integration into production environments.' },
        { title: 'Maintenance', description: 'Proactive support, optimization, and security updates.' },
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div className="section-title reveal">
                    <h2>How We <span className="gradient-text">Execute</span> Projects</h2>
                    <p>A systematic approach to engineering excellence.</p>
                </div>
                <div className="timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="timeline-item reveal">
                            <h3>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
