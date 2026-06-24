// =============================
// FOODIE RESTAURANT JS
// =============================

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Navbar scroll effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    } else {
        header.style.background = "rgba(255,255,255,0.75)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
    }
});


// Simple gallery hover effect (videos autoplay enhancement)
const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
    });
});


// Reservation form validation and submission
const form = document.querySelector(".reservation form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form values
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const date = form.querySelector('input[type="date"]').value;
        const time = form.querySelector('input[type="time"]').value;

        // Validation
        if (!name || !email || !date || !time) {
            alert("⚠️ Please fill in all fields");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("⚠️ Please enter a valid email address");
            return;
        }

        // Check if date is in the future
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert("⚠️ Please select a future date");
            return;
        }

        // Success message
        alert(`✅ Reservation confirmed!\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\n\nWe will contact you soon!`);

        // Reset form
        form.reset();
    });
}


// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.card, .feature, .media-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});


// Add active class to current navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});


// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #FF6B35;
        border-bottom: 2px solid #FF6B35;
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);
