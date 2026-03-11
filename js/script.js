    <script>
        /* --- JAVASCRIPT START --- */
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => { document.body.classList.remove('loading'); }, 100);

            const heroImg = document.querySelector('.hero-bg img');
            window.addEventListener('scroll', () => {
                let scrollPosition = window.pageYOffset;
                if (heroImg && scrollPosition < window.innerHeight) {
                    heroImg.style.transform = `translateY(${scrollPosition * 0.4}px) scale(1.1)`;
                }
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
                });
            });

            const animateElements = document.querySelectorAll('.animate-on-scroll');
            const scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); 
                    }
                });
            }, { root: null, rootMargin: '0px', threshold: 0.15 });

            animateElements.forEach(el => { scrollObserver.observe(el); });

            const scrollTopBtn = document.getElementById('scrollTopBtn');
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 500) { scrollTopBtn.classList.add('show'); } 
                else { scrollTopBtn.classList.remove('show'); }
            });

            scrollTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
        });
        /* --- JAVASCRIPT END --- */
    </script>
