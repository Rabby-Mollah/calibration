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
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Important: Close menu when clicking a link
document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
// --- Countdown Timer ---
// Set your target end date here (Format: "Month DD, YYYY HH:MM:SS")
const countDownDate = new Date("March 22, 2026 23:59:59").getTime(); 

const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    
    if (countdownElement) {
        if (distance < 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = "REGISTRATION CLOSED";
            countdownElement.style.color = "var(--primary-orange)";
        } else {
            // Add leading zeros if number is less than 10
            countdownElement.innerHTML = `
                <span>${days < 10 ? '0' + days : days}d</span> : 
                <span>${hours < 10 ? '0' + hours : hours}h</span> : 
                <span>${minutes < 10 ? '0' + minutes : minutes}m</span> : 
                <span>${seconds < 10 ? '0' + seconds : seconds}s</span>
            `;
        }
    }
}, 1000);
