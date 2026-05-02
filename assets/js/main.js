/**
 * Enhanced Academic Website JavaScript
 * Responsive, Accessible, and Performance-Optimized
 */

// Enhanced theme management
class ThemeManager {
    constructor() {
        this.init();
    }
    
    init() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', this.toggleTheme.bind(this));
            themeToggle.setAttribute('aria-label', 'Toggle dark/light theme');
        }
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme, true);
    }
    
    setTheme(theme, saveToStorage = false) {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
        
        // Update meta theme-color for mobile browsers
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', theme === 'dark' ? '#0f172a' : '#2563eb');
        }
        
        if (saveToStorage) {
            localStorage.setItem('theme', theme);
        }
    }
}

// Enhanced mobile menu management
class MobileMenuManager {
    constructor() {
        this.menuToggle = document.querySelector('.menu-toggle');
        this.menuWrapper = document.querySelector('.menu-wrapper');
        this.menuOverlay = document.querySelector('.menu-overlay');
        this.isActive = false;
        this.init();
    }
    
    init() {
        if (!this.menuToggle || !this.menuWrapper || !this.menuOverlay) return;
        
        this.menuToggle.addEventListener('click', this.toggleMenu.bind(this));
        this.menuOverlay.addEventListener('click', this.closeMenu.bind(this));
        
        // Close menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isActive) {
                this.closeMenu();
            }
        });
        
        // Close menu on window resize to prevent issues
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 768 && this.isActive) {
                    this.closeMenu();
                }
            }, 250);
        });
        
        // Enhanced touch handling for mobile
        let startY = 0;
        this.menuWrapper.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });
        
        this.menuWrapper.addEventListener('touchmove', (e) => {
            const currentY = e.touches[0].clientY;
            const diffY = startY - currentY;
            
            // Prevent background scroll when menu is at top/bottom
            if ((diffY > 0 && this.menuWrapper.scrollTop === 0) ||
                (diffY < 0 && this.menuWrapper.scrollTop >= this.menuWrapper.scrollHeight - this.menuWrapper.clientHeight)) {
                e.preventDefault();
            }
        });
    }
    
    toggleMenu() {
        if (this.isActive) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.isActive = true;
        this.menuToggle.classList.add('is-active');
        this.menuWrapper.classList.add('is-active');
        this.menuOverlay.classList.add('is-active');
        
        // Enhanced accessibility
        this.menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        const firstLink = this.menuWrapper.querySelector('a, button');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 300);
        }
    }
    
    closeMenu() {
        this.isActive = false;
        this.menuToggle.classList.remove('is-active');
        this.menuWrapper.classList.remove('is-active');
        this.menuOverlay.classList.remove('is-active');
        
        // Enhanced accessibility
        this.menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        this.menuToggle.focus();
    }
}

// Enhanced scroll-based animations with Intersection Observer
class AnimationManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Skip animations if user prefers reduced motion
        }
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        this.observeElements();
    }
    
    observeElements() {
        const elements = document.querySelectorAll('.card, .research-item, .publication-card, .timeline-item, .hero');
        elements.forEach(el => this.observer.observe(el));
    }
}

// Performance monitoring and optimization
class PerformanceManager {
    constructor() {
        this.init();
    }
    
    init() {
        if (!('performance' in window)) return;
        
        // Monitor page load performance
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    this.logPerformanceMetrics(perfData);
                }
            }, 0);
        });
        
        // Implement lazy loading for images
        this.implementLazyLoading();
    }
    
    logPerformanceMetrics(perfData) {
        const metrics = {
            domContentLoaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
            loadComplete: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
            totalTime: Math.round(perfData.loadEventEnd - perfData.navigationStart),
            firstByte: Math.round(perfData.responseStart - perfData.requestStart)
        };
        
        // Log performance notice if page is slow
        if (metrics.totalTime > 3000) {
            console.log('Performance Notice: Page load time', metrics.totalTime + 'ms');
        }
    }
    
    implementLazyLoading() {
        // Native lazy loading with fallback
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading supported
            const images = document.querySelectorAll('img:not([loading])');
            images.forEach(img => {
                img.loading = 'lazy';
            });
        } else {
            // Fallback for browsers without native support
            this.initIntersectionObserverLazyLoading();
        }
    }
    
    initIntersectionObserverLazyLoading() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

class TemplateBulbManager {
    constructor() {
        this.storageKey = 'templateBulbDismissed';
        this.root = document.querySelector('[data-template-bulb]');
        this.toggle = document.querySelector('[data-template-bulb-toggle]');
        this.panel = document.getElementById('template-bulb-panel');
        this.closeButton = document.querySelector('[data-template-bulb-close]');
        this.isOpen = false;
        this.init();
    }

    init() {
        if (!this.root || !this.toggle || !this.panel || !this.closeButton) return;

        if (localStorage.getItem(this.storageKey) === 'true') {
            this.root.hidden = true;
            return;
        }

        this.toggle.addEventListener('click', () => this.togglePanel());
        this.closeButton.addEventListener('click', () => this.dismiss());

        document.addEventListener('click', (event) => {
            if (!this.isOpen) return;
            if (!this.root.contains(event.target)) {
                this.closePanel();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.isOpen) {
                this.closePanel();
            }
        });

        window.setTimeout(() => {
            if (!this.isOpen) {
                this.openPanel();
            }
        }, 1200);
    }

    togglePanel() {
        if (this.isOpen) {
            this.closePanel();
            return;
        }

        this.openPanel();
    }

    openPanel() {
        this.panel.hidden = false;
        this.toggle.setAttribute('aria-expanded', 'true');
        this.isOpen = true;
    }

    closePanel() {
        this.panel.hidden = true;
        this.toggle.setAttribute('aria-expanded', 'false');
        this.isOpen = false;
    }

    dismiss() {
        localStorage.setItem(this.storageKey, 'true');
        this.closePanel();
        this.root.hidden = true;
    }
}

class EmailObfuscationManager {
    constructor() {
        this.init();
    }

    init() {
        const links = document.querySelectorAll('.js-obfuscated-email');
        links.forEach((link) => {
            const userReversed = link.getAttribute('data-email-user-reversed') || '';
            const domainReversed = link.getAttribute('data-email-domain-reversed') || '';

            if (!userReversed || !domainReversed) return;

            const email = `${this.reverseString(userReversed)}@${this.reverseString(domainReversed)}`;
            link.href = `mailto:${email}`;
            link.textContent = email;
        });
    }

    reverseString(value) {
        return value.split('').reverse().join('');
    }
}

// Main application initialization
class AcademicWebsite {
    constructor() {
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeManagers());
        } else {
            this.initializeManagers();
        }
    }
    
    initializeManagers() {
        // Initialize all managers
        this.themeManager = new ThemeManager();
        this.mobileMenuManager = new MobileMenuManager();
        this.animationManager = new AnimationManager();
        this.performanceManager = new PerformanceManager();
        this.templateBulbManager = new TemplateBulbManager();
        this.emailObfuscationManager = new EmailObfuscationManager();
        
        // Register service worker for enhanced performance
        this.registerServiceWorker();
    }
    
    registerServiceWorker() {
        if ('serviceWorker' in navigator && location.protocol === 'https:') {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {
                    // Service worker not available, continue normally
                });
            });
        }
    }
}

// Initialize the application
new AcademicWebsite();
