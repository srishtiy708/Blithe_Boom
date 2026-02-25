import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Globe, BookOpen, HeartPulse, ShieldCheck, Layout, ExternalLink } from 'lucide-react';
import infraHero from '../assets/hero-infra.png';
import eHealthCustom from '../assets/ehealth-custom.jpg';
import servicesMain from '../assets/services-main.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
    const services = [
        {
            title: 'Enterprise Web Development',
            desc: 'Custom enterprise web applications with scalable architecture and modular design.',
            icon: <Globe size={24} />,
            color: '#6366F1',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015'
        },
        {
            title: 'Digital Education Systems',
            desc: 'Structured solutions for modern academic and corporate e-learning and LMS.',
            icon: <BookOpen size={24} />,
            color: '#A855F7',
            img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2067'
        },
        {
            title: 'E-Health Platforms',
            desc: 'Secure and user-centric digital healthcare system interfaces and architectures.',
            icon: <HeartPulse size={24} />,
            color: '#22D3EE',
            img: eHealthCustom
        },
        {
            title: 'Quality Engineering',
            desc: 'Comprehensive performance, reliability, and compliance testing workflows.',
            icon: <ShieldCheck size={24} />,
            color: '#10B981',
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070'
        },
        {
            title: 'Platform Maintenance',
            desc: 'Frontend architecture, UI/UX optimization, and evolving platform support.',
            icon: <Layout size={24} />,
            color: '#F59E0B',
            img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070'
        }
    ];

    return (
        <section id="services" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div className="section-title" data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Service <span className="gradient-text">Capabilities</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Delivering end-to-end digital solutions through systematic engineering
                        and production-grade execution standards.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        style={{ paddingBottom: '4rem' }}
                    >
                        {services.map((service, idx) => (
                            <SwiperSlide key={idx} style={{ height: 'auto', display: 'flex' }}>
                                <div className="glass corporate-card" style={{ cursor: 'grab', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <div style={{ height: '160px', width: '100%', overflow: 'hidden' }}>
                                        <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                                    </div>
                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div className="card-icon" style={{
                                            color: service.color,
                                            background: `${service.color}15`,
                                            width: '50px',
                                            height: '50px',
                                            marginBottom: '1.5rem'
                                        }}>
                                            {React.cloneElement(service.icon, { size: 24 })}
                                        </div>
                                        <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '1rem' }}>{service.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                            {service.desc}
                                        </p>
                                        <a href="#contact" style={{
                                            marginTop: 'auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'white',
                                            fontSize: '0.85rem',
                                            fontWeight: 'bold',
                                            background: service.color,
                                            padding: '0.6rem 1.2rem',
                                            borderRadius: '50px',
                                            alignSelf: 'flex-start',
                                            textDecoration: 'none',
                                            transition: 'var(--transition)'
                                        }} className="btn-hover-effect">
                                            Explore Solutions <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Wide tech-services graphic placeholder / illustration */}
                <div data-aos="zoom-in" data-aos-delay="400" style={{ marginTop: '4rem', opacity: 1.0 }}>
                    <img
                        src={servicesMain}
                        alt="Infrastructure Illustration"
                        style={{
                            width: '100%',
                            height: '500px',
                            objectFit: 'cover',
                            borderRadius: '40px',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .swiper-slide { height: 100% !important; }
                .corporate-card { height: 100% !important; display: flex !important; }
            ` }} />
        </section>
    );
};

export default Services;
