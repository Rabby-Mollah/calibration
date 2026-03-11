document.addEventListener('DOMContentLoaded', () => {
    // Reveal body
    setTimeout(() => document.body.classList.remove('loading'), 100);

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Scroll Top Button
    const topBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) topBtn.classList.add('show');
        else topBtn.classList.remove('show');
    });

    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
