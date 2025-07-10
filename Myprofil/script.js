document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Remove active class from all and add to clicked
            document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active class on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 70) { // Offset for fixed header
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // Handle "Download My CV" button to show "Not Available Yet" modal
    const downloadCvBtn = document.querySelector('.btn-box .btn:last-child');
    const notAvailableModal = document.getElementById('notAvailableModal');

    downloadCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('notAvailableModal');
    });

    // Handle "Add Testimonial" button
    const addTestimonialBtn = document.querySelector('.add-testimonial-btn');
    const addTestimonialModal = document.getElementById('addTestimonialModal');
    const testimonialForm = document.getElementById('testimonialForm');
    const thankYouModal = document.getElementById('thankYouModal');

    addTestimonialBtn.addEventListener('click', () => {
        openModal('addTestimonialModal');
    });

    testimonialForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        // For this example, we'll just show the thank you message
        closeModal('addTestimonialModal');
        openModal('thankYouModal');

        // Optional: Clear the form after submission
        testimonialForm.reset();
    });

    // Contact section tab switching
    const tabButtons = document.querySelectorAll('.contact-tabs .tab-button');
    const contactContents = document.querySelectorAll('.contact-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            contactContents.forEach(content => content.style.display = 'none');

            // Add active class to clicked button and show target content
            button.classList.add('active');
            document.getElementById(targetTab).style.display = 'flex'; // Use flex for layout
        });
    });

    // Initial display for contact form (default active)
    document.getElementById('contact-form').style.display = 'flex';
});

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}