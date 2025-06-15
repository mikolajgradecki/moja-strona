// ========================================
// TEATR MIEJSKI - JAVASCRIPT INTERACTIONS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // INITIALIZATION & VARIABLES
    // ========================================
    
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    const newsletterForm = document.getElementById('newsletterForm');
    const formMessage = document.getElementById('formMessage');
    const emailInput = document.getElementById('email');
    
    // ========================================
    // SMOOTH SCROLL NAVIGATION
    // ========================================
    
    function initSmoothScroll() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navList.classList.contains('active')) {
                        toggleMobileMenu();
                    }
                    
                    // Update active link
                    updateActiveLink(this);
                }
            });
        });
    }
    
    // ========================================
    // STICKY NAVIGATION & SCROLL EFFECTS
    // ========================================
    
    function initStickyNav() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class for styling
            if (currentScrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Update active navigation link based on scroll position
            updateActiveNavOnScroll();
            
            lastScrollY = currentScrollY;
        });
    }
    
    // ========================================
    // ACTIVE NAVIGATION MANAGEMENT
    // ========================================
    
    function updateActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
    
    function updateActiveNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = nav.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const targetLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (targetLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    targetLink.classList.add('active');
                }
            }
        });
    }
    
    // ========================================
    // MOBILE MENU
    // ========================================
    
    function initMobileMenu() {
        if (mobileMenuToggle && navList) {
            mobileMenuToggle.addEventListener('click', toggleMobileMenu);
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!nav.contains(e.target) && navList.classList.contains('active')) {
                    toggleMobileMenu();
                }
            });
            
            // Close menu on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && navList.classList.contains('active')) {
                    toggleMobileMenu();
                }
            });
        }
    }
    
    function toggleMobileMenu() {
        navList.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (mobileMenuToggle.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    }
    
    // ========================================
    // NEWSLETTER FORM VALIDATION
    // ========================================
    
    function initNewsletterForm() {
        if (newsletterForm && emailInput && formMessage) {
            newsletterForm.addEventListener('submit', handleNewsletterSubmit);
            
            // Real-time email validation
            emailInput.addEventListener('input', function() {
                clearFormMessage();
                validateEmailInput();
            });
            
            emailInput.addEventListener('blur', validateEmailInput);
        }
    }
    
    function handleNewsletterSubmit(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!validateEmail(email)) {
            showFormMessage('Proszę podać prawidłowy adres email.', 'error');
            return;
        }
        
        // Simulate form submission
        showFormMessage('Zapisuję...', 'loading');
        emailInput.disabled = true;
        
        setTimeout(() => {
            showFormMessage('Dziękujemy! Zostałeś zapisany do newslettera.', 'success');
            emailInput.value = '';
            emailInput.disabled = false;
        }, 1500);
    }
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validateEmailInput() {
        const email = emailInput.value.trim();
        
        if (email && !validateEmail(email)) {
            emailInput.style.borderColor = '#F44336';
            showFormMessage('Nieprawidłowy format adresu email.', 'error');
        } else {
            emailInput.style.borderColor = '';
            clearFormMessage();
        }
    }
    
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        if (type === 'loading') {
            formMessage.style.opacity = '0.7';
        } else {
            formMessage.style.opacity = '1';
        }
    }
    
    function clearFormMessage() {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
        formMessage.style.display = 'none';
    }
    
    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        if (animatedElements.length === 0) {
            // Add animation classes to elements that should animate
            const elementsToAnimate = [
                '.section-header',
                '.about-text',
                '.about-stats',
                '.show-card',
                '.pricing-card',
                '.gallery-item',
                '.contact-item',
                '.newsletter-content'
            ];
            
            elementsToAnimate.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => el.classList.add('animate-on-scroll'));
            });
        }
        
        // Use Intersection Observer for better performance
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
    
    // ========================================
    // PRICING CARD INTERACTIONS
    // ========================================
    
    function initPricingCards() {
        const pricingCards = document.querySelectorAll('.pricing-card');
        
        pricingCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Subtle scale effect
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-8px)';
            });
        });
    }
    
    // ========================================
    // BUTTON INTERACTIONS
    // ========================================
    
    function initButtonEffects() {
        const buttons = document.querySelectorAll('.btn, .show-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    left: ${x}px;
                    top: ${y}px;
                    width: ${size}px;
                    height: ${size}px;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Add CSS for ripple animation
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // ========================================
    // GALLERY INTERACTIONS
    // ========================================
    
    function initGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                // Simple modal-like behavior (can be expanded)
                const image = this.querySelector('.gallery-image');
                const content = this.querySelector('.gallery-content');
                
                if (image && content) {
                    const title = content.querySelector('h3').textContent;
                    const description = content.querySelector('p').textContent;
                    
                    // Create a simple alert for now (in production, use a proper modal)
                    alert(`${title}\n\n${description}`);
                }
            });
        });
    }
    
    // ========================================
    // PERFORMANCE OPTIMIZATIONS
    // ========================================
    
    function throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        
        return function (...args) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    }
    
    // ========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ========================================
    
    function initAccessibility() {
        // Skip link functionality
        const skipLink = document.createElement('a');
        skipLink.href = '#hero';
        skipLink.textContent = 'Przejdź do treści głównej';
        skipLink.className = 'skip-link';
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Keyboard navigation for mobile menu
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleMobileMenu();
                }
            });
        }
        
        // Escape key to close mobile menu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navList.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
        
        // ARIA labels for interactive elements
        const interactiveElements = document.querySelectorAll('button, .btn, .show-btn');
        interactiveElements.forEach(element => {
            if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
                element.setAttribute('aria-label', 'Przycisk');
            }
        });
    }
    
    // ========================================
    // LOADING ANIMATIONS
    // ========================================
    
    function initLoadingAnimations() {
        // Add loading class to body
        document.body.classList.add('loading');
        
        // Remove loading class after page is fully loaded
        window.addEventListener('load', function() {
            setTimeout(() => {
                document.body.classList.remove('loading');
                document.body.classList.add('loaded');
                
                // Trigger hero animation
                const heroContent = document.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.classList.add('fade-in-up');
                }
            }, 100);
        });
    }
    
    // ========================================
    // ERROR HANDLING
    // ========================================
    
    function handleErrors() {
        window.addEventListener('error', function(e) {
            console.error('JavaScript Error:', e.error);
            // In production, you might want to send errors to a logging service
        });
        
        // Handle promise rejections
        window.addEventListener('unhandledrejection', function(e) {
            console.error('Unhandled Promise Rejection:', e.reason);
        });
    }
    
    // ========================================
    // INITIALIZATION
    // ========================================
    
    function init() {
        try {
            // Core functionality
            initSmoothScroll();
            initStickyNav();
            initMobileMenu();
            initNewsletterForm();
            
            // Enhanced interactions
            initScrollAnimations();
            initPricingCards();
            initButtonEffects();
            initGallery();
            
            // Accessibility and performance
            initAccessibility();
            initLoadingAnimations();
            
            // Error handling
            handleErrors();
            
            console.log('🎭 Teatr Miejski - Website initialized successfully!');
            
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }
    
    // Start the application
    init();
    
    // ========================================
    // PUBLIC API (for potential future use)
    // ========================================
    
    window.TeatrMiejski = {
        smoothScrollTo: function(targetId) {
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = nav.offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        },
        
        showNotification: function(message, type = 'info') {
            showFormMessage(message, type);
        },
        
        toggleMobileMenu: toggleMobileMenu,
        
        version: '1.0.0'
    };
});

// ========================================
// SERVICE WORKER (for future PWA features)
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker registration would go here
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ========================================
// ANALYTICS & TRACKING (placeholder)
// ========================================

function trackEvent(eventName, eventData) {
    // Google Analytics or other tracking would go here
    console.log('Track Event:', eventName, eventData);
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn, .show-btn, .social-link')) {
        const buttonText = e.target.textContent || e.target.getAttribute('aria-label');
        trackEvent('button_click', {
            button_text: buttonText,
            section: e.target.closest('section')?.id || 'unknown'
        });
    }
});

// ========================================
// DEVELOPMENT HELPERS
// ========================================

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Development mode helpers
    console.log('🚀 Development mode active');
    
    // Add debug information
    window.debugInfo = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight
        },
        userAgent: navigator.userAgent,
        supportedFeatures: {
            intersectionObserver: 'IntersectionObserver' in window,
            serviceWorker: 'serviceWorker' in navigator,
            localStorage: 'localStorage' in window
        }
    };
} 
