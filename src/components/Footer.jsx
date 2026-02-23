import logo from '../assets/logo.jpeg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="logo-wrapper" style={{ marginBottom: '1.5rem' }}>
                            <img src={logo} alt="Logo" />
                            <span className="logo-text gradient-text">Blithe Boom</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)' }}>Engineering practical digital solutions through structured innovation and academic-industry collaboration.</p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                            <li><a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About Us</a></li>
                            <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Services</a></li>
                            <li><a href="#portfolio" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Portfolio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Solutions</h4>
                        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                            <li style={{ color: 'var(--text-muted)' }}>LMS Systems</li>
                            <li style={{ color: 'var(--text-muted)' }}>E-Health Platforms</li>
                            <li style={{ color: 'var(--text-muted)' }>Enterprise Web</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '1.5rem' }}><i className="fab fa-linkedin"></i></a>
                            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '1.5rem' }}><i className="fab fa-twitter"></i></a>
                            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '1.5rem' }}><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Blithe Boom System Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
