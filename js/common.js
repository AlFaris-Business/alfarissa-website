// الفارس للأعمال - ملف JavaScript مشترك

// Configure Tailwind CSS
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    notoKufi: ['Noto Kufi Arabic', 'sans-serif'],
                    'arabic-text': ['Noto Kufi Arabic', 'sans-serif'],
                },
            },
        },
    };
}

// Common JavaScript functionality for Al Faris Business website
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle automatic population of service type in forms
    const serviceTypeSelect = document.getElementById('serviceType');
    const selectedService = localStorage.getItem('selectedServiceType');

    if (selectedService && serviceTypeSelect) {
        let optionExists = false;
        for (let i = 0; i < serviceTypeSelect.options.length; i++) {
            if (serviceTypeSelect.options[i].value === selectedService) {
                serviceTypeSelect.value = selectedService;
                optionExists = true;
                break;
            }
        }
        
        // If specific option doesn't exist, try to find a broader category
        if (!optionExists) {
            if (selectedService.startsWith('قضايا_احوال_شخصية')) {
                serviceTypeSelect.value = 'قضايا_احوال_شخصية';
            } else if (selectedService.includes('قضايا_المحاكم_العامة') || selectedService.includes('قضايا_عقارية') || selectedService.includes('مطالبات_مدنية') || selectedService.includes('تصحي_اوضاع') || selectedService.includes('قضايا_ملكية_فكرية')) {
                serviceTypeSelect.value = 'قضايا_المحاكم_العامة';
            } else if (selectedService.startsWith('قضايا_المحاكم_التجارية') || selectedService.includes('منازعات_الشركات') || selectedService.includes('عقود_مطالبات_تجارية') || selectedService.includes('منافسة_ممارسات_تجارية') || selectedService.includes('تحكيم_تجاري')) {
                serviceTypeSelect.value = 'قضايا_المحاكم_التجارية';
            } else if (selectedService.startsWith('قضايا_المحاكم_العمالية') || selectedService.includes('حقوق_العمال') || selectedService.includes('تمثيل_اصحاب_العمل') || selectedService.includes('استشارات_عمالية')) {
                serviceTypeSelect.value = 'قضايا_المحاكم_العمالية';
            } else if (selectedService.includes('تأسيس_الشركات') || selectedService.includes('تعديل_الشركات') || selectedService.includes('مستثمرين_اجانب')) {
                serviceTypeSelect.value = 'تأسيس_شركات_واستثمار';
            } else if (selectedService.includes('وزارة_العدل_ناجز') || selectedService.includes('وزارة_التجارة') || selectedService.includes('البلديات') || selectedService.includes('موارد_بشرية_تنمية_اجتماعية')) {
                serviceTypeSelect.value = 'تعقيب_معاملات_حكومية';
            } else if (selectedService.includes('تراخيص_انشطة_تجارية') || selectedService.includes('تراخيص_دفاع_مدني_صحة') || selectedService.includes('تراخيص_بيئية_سياحية_زراعية')) {
                serviceTypeSelect.value = 'استخراج_وتجديد_التراخيص';
            } else if (selectedService.includes('منصة_قوى') || selectedService.includes('منصة_ab_jsher') || selectedService.includes('منصة_بلدي') || selectedService.includes('منصات_حكومية_اخرى')) {
                serviceTypeSelect.value = 'خدمات_التعقيب_الإلكتروني';
            } else if (selectedService.includes('الضمان_الاجتماعي') || selectedService.includes('حساب_المواطن') || selectedService.includes('بنك_التنمية_الاجتماعية') || selectedService.includes('دعم_ريف_للاسر_المنتجة') || selectedService.includes('رخص_العمل_الحر')) {
                serviceTypeSelect.value = 'خدمات_Ddm_Ajtm_Wal_Amal_Hr';
            } else {
                serviceTypeSelect.value = '';
            }
        }

        // Clear the item from local storage after using it
        localStorage.removeItem('selectedServiceType');
    }

    // Handle active navigation highlighting
    highlightActiveNavigation();
    
    // Initialize mobile navigation toggle
    initializeMobileNavigation();
    
    // Handle form submissions
    initializeFormHandlers();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
});

// Function to highlight active navigation item
function highlightActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('nav-active');
        } else {
            link.classList.remove('nav-active');
        }
    });
}

// Function to initialize mobile navigation
function initializeMobileNavigation() {
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu-open');
            
            // Toggle hamburger icon
            const icon = mobileToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('nav-menu-open');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('nav-menu-open');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Function to initialize form handlers
function initializeFormHandlers() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('fullName') || formData.get('name');
            const phone = formData.get('phoneNumber') || formData.get('phone');
            const message = formData.get('description') || formData.get('message');
            const service = formData.get('serviceType') || '';
            
            // Create WhatsApp message
            let whatsappMessage = `مرحباً، أود التواصل معكم:\n\n`;
            if (name) whatsappMessage += `الاسم: ${name}\n`;
            if (phone) whatsappMessage += `رقم الجوال: ${phone}\n`;
            if (service) whatsappMessage += `نوع الخدمة: ${service}\n`;
            if (message) whatsappMessage += `التفاصيل: ${message}\n`;
            
            // Encode message for WhatsApp URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/966555490800?text=${encodedMessage}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');
            
            // Reset form
            form.reset();
            
            // Show success message
            showNotification('تم إرسال طلبك بنجاح! سيتم تحويلك إلى واتساب.', 'success');
        });
    });
}

// Function to show notifications
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        font-family: 'Noto Kufi Arabic', sans-serif;
        max-width: 300px;
        word-wrap: break-word;
        animation: slideIn 0.3s ease-out;
    `;
    
    notification.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    if (!document.head.querySelector('style[data-notifications]')) {
        style.setAttribute('data-notifications', 'true');
        document.head.appendChild(style);
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Function to store selected service and navigate to contact
function selectServiceAndContact(serviceType) {
    localStorage.setItem('selectedServiceType', serviceType);
    window.location.href = 'index.html#contact';
}

// Function to initialize smooth scrolling
function initializeSmoothScrolling() {
    // Handle smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Handle hash navigation on page load
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    }

    // Register Service Worker for caching
    registerServiceWorker();
}

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered successfully:', registration.scope);
                    
                    // Handle service worker updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New service worker is available, prompt user to refresh
                                if (confirm('موقع محدث متاح. هل تريد إعادة تحميل الصفحة؟')) {
                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                    window.location.reload();
                                }
                            }
                        });
                    });
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        });
    }
}