import useReveal from '../hooks/useReveal';

const Contact = () => {
    useReveal();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for form submission can be added here
        alert('Thank you for your inquiry! We will get back to you soon.');
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <div className="grid">
                    <div className="reveal">
                        <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's Build Something Great</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                            Blithe Boom System Pvt. Ltd. is open for collaborations, enterprise inquiries, and academic partnerships.
                        </p>
                        <div className="contact-info">
                            <p><i className="fas fa-envelope" style={{ marginRight: '15px', color: 'var(--primary)' }}></i> contact@blitheboom.com</p>
                            <p><i className="fas fa-map-marker-alt" style={{ marginRight: '15px', color: 'var(--primary)' }}></i> Technology Incubation Center, CET&R</p>
                        </div>
                    </div>
                    <div className="glass reveal" style={{ padding: '3rem' }}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white' }} />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <input type="email" placeholder="Your Email" required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white' }} />
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <textarea placeholder="Message" rows="5" required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white', resize: 'none' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
