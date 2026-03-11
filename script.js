document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Page Load Fade-in
    // Removes the .loading class from body to trigger CSS opacity transition
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 100);

    // 2. Parallax Effect for Hero Image
    const heroImg = document.querySelector('.hero-bg img');
    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        if (heroImg && scrollPosition < window.innerHeight) {
            heroImg.style.transform = `translateY(${scrollPosition * 0.4}px) scale(1.1)`;
        }
    });

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. Scroll Animations (Intersection Observer)
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // 5. Scroll to Top Button Logic
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});