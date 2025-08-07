/* AlFaris Business Website - Navigation Script */
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            
            // Change icon based on menu state
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('show')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('show');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinksElements = navLinks.querySelectorAll('a');
        navLinksElements.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('show');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
    
    // Set active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksElements = document.querySelectorAll('.nav-links a');
    
    navLinksElements.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Contact form handling
    const contactForm = document.getElementById('quick-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const phone = document.getElementById('contact-phone').value;
            const message = document.getElementById('contact-message').value;
            
            if (name && phone && message) {
                const whatsappMessage = `مرحباً، اسمي ${name}%0Aرقم الجوال: ${phone}%0Aالطلب: ${message}`;
                const whatsappUrl = `https://wa.me/966555490800?text=${whatsappMessage}`;
                window.open(whatsappUrl, '_blank');
                
                // Clear form
                contactForm.reset();
            } else {
                alert('يرجى ملء جميع الحقول المطلوبة');
            }
        });
    }
});