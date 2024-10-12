document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scrolling effect
            });
        }
    });
});

// Optional: Adding scroll animations for sections
const sections = document.querySelectorAll('main section');
const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
