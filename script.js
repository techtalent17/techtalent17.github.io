document.addEventListener('DOMContentLoaded', () => {
    // Form validation and handling
    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.getElementById('contact-message');

    // Form submission event listener
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents page reload

        // Retrieve input values
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        // Basic validation
        if (name === '' || email === '' || message === '') {
            contactMessage.textContent = 'Please fill in all fields.';
            contactMessage.style.color = 'red';
            return;
        }

        // Simulating a successful submission
        contactMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        contactMessage.style.color = 'green';

        // Reset form fields
        contactForm.reset();
    });

    // Scroll animation effect for navigation links
    const navLinks = document.querySelectorAll('.nav__list a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to the section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Skill Progress Bar Animation
    const skillsSection = document.getElementById('experience');
    const skills = document.querySelectorAll('.skill');

    // Function to animate progress bars
    const animateSkills = () => {
        skills.forEach(skill => {
            const progressBar = skill.querySelector('.progress');
            const skillValue = progressBar.getAttribute('data-skill');
            let width = 0;

            const interval = setInterval(() => {
                if (width < skillValue) {
                    width++;
                    progressBar.style.width = `${width}%`;
                    progressBar.textContent = `${width}%`;
                } else {
                    clearInterval(interval);
                }
            }, 10);
        });
    };

    // Check if skills section is in view and animate progress bars
    const checkIfInView = () => {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            animateSkills();
            window.removeEventListener('scroll', checkIfInView);
        }
    };

    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // In case the section is already in view when the page loads
});
