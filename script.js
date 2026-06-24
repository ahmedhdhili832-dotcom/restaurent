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


// Reservation form message
const form = document.querySelector(".reservation form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Reservation sent successfully!");

        form.reset();
    });
}