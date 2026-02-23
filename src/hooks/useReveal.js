import { useEffect } from 'react';

const useReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            });
        }, revealOptions);

        revealElements.forEach(el => revealObserver.observe(el));

        // Cleanup
        return () => {
            revealElements.forEach(el => revealObserver.unobserve(el));
        };
    }, []);
};

export default useReveal;
