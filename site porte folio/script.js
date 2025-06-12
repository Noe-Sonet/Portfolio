// Gestion de la barre de navigation
// SUPPRIMÉ : tout le code qui masque/affiche la navbar au scroll

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Ici, vous pouvez ajouter le code pour envoyer les données à un serveur
        console.log('Données du formulaire:', data);
        
        // Message de confirmation
        alert('Merci pour votre message ! Je vous répondrai dès que possible.');
        contactForm.reset();
    });
}

// Animation des cartes de compétences au scroll
const skillCards = document.querySelectorAll('.skill-card');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

skillCards.forEach(card => {
    observer.observe(card);
});

// Ajout de la classe CSS pour l'animation
// SUPPRIMÉ : le style injecté pour .navbar.scroll-down et .navbar.scroll-up

// Carousel Accueil
// SUPPRIMÉ : ancienne logique basée sur .carousel-project-card
// Nouvelle logique : uniquement .carousel-slide

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    
    let currentSlide = 0;
    
    // Cacher tous les slides sauf le premier
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === 0);
    });
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
});




