// SME CUBE - Main JavaScript

// Global Variables
const SME_CUBE = {
    config: {
        primaryColor: '#ed2849',
        backgroundColor: '#f6e3ec',
        textColor: '#1e293b',
        contactPhone: '+৮৮০ ১৭১১-২২৩৩৪৪',
        contactEmail: 'info@smecube.com'
    },
    
    // Initialize the application
    init: function() {
        this.setupEventListeners();
        this.initializeComponents();
        this.setupResponsiveHandlers();
    },
    
    // Setup event listeners
    setupEventListeners: function() {
        // Tab switching functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-button')) {
                this.handleTabSwitch(e.target);
            }
        });
        
        // Order button functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('order-button')) {
                this.handleOrderClick(e.target);
            }
        });
        
        // Form submission
        document.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(e.target);
        });
    },
    
    // Initialize components
    initializeComponents: function() {
        this.initializeTabs();
        this.initializeAnimations();
        this.initializeLazyLoading();
    },
    
    // Tab switching functionality
    handleTabSwitch: function(clickedButton) {
        const tabContainer = clickedButton.closest('.tab-container');
        if (!tabContainer) return;
        
        // Remove active class from all buttons
        const allButtons = tabContainer.querySelectorAll('.tab-button');
        allButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        clickedButton.classList.add('active');
        
        // Get target section
        const targetSection = clickedButton.getAttribute('onclick');
        if (targetSection) {
            const sectionName = targetSection.match(/showSection\('([^']+)'\)/);
            if (sectionName) {
                this.showSection(sectionName[1]);
            }
        }
    },
    
    // Show specific section
    showSection: function(sectionName) {
        // Hide all sections
        const sections = document.querySelectorAll('.content-section, .tab-content');
        sections.forEach(section => section.classList.remove('active'));
        
        // Show selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    },
    
    // Handle order button clicks
    handleOrderClick: function(button) {
        const planType = button.getAttribute('data-plan') || 'service';
        const serviceName = button.closest('.plan-card')?.querySelector('.plan-title')?.textContent || 'সার্ভিস';
        
        this.showOrderModal(serviceName, planType);
    },
    
    // Show order modal/alert
    showOrderModal: function(serviceName, planType) {
        const message = `${serviceName} অর্ডারের জন্য আমাদের সাথে যোগাযোগ করুন:\n\nফোন: ${this.config.contactPhone}\nইমেইল: ${this.config.contactEmail}\n\nআমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।`;
        
        if (typeof alert !== 'undefined') {
            alert(message);
        } else {
            this.createModal(message);
        }
    },
    
    // Create modal for order
    createModal: function(message) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>অর্ডার করুন</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary modal-close">বুঝেছি</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        modal.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
        
        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    },
    
    // Handle form submission
    handleFormSubmission: function(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.innerHTML = '<span class="loading"></span> পাঠানো হচ্ছে...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            this.showSuccessMessage('আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    },
    
    // Show success message
    showSuccessMessage: function(message) {
        const alert = document.createElement('div');
        alert.className = 'alert alert-success';
        alert.textContent = message;
        
        const container = document.querySelector('.container');
        container.insertBefore(alert, container.firstChild);
        
        setTimeout(() => {
            alert.remove();
        }, 5000);
    },
    
    // Initialize tabs
    initializeTabs: function() {
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            if (button.classList.contains('active')) {
                const onclick = button.getAttribute('onclick');
                if (onclick) {
                    const sectionName = onclick.match(/showSection\('([^']+)'\)/);
                    if (sectionName) {
                        this.showSection(sectionName[1]);
                    }
                }
            }
        });
    },
    
    // Initialize animations
    initializeAnimations: function() {
        // Intersection Observer for scroll animations
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.card, .plan-card').forEach(card => {
                observer.observe(card);
            });
        }
    },
    
    // Initialize lazy loading
    initializeLazyLoading: function() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    },
    
    // Setup responsive handlers
    setupResponsiveHandlers: function() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    },
    
    // Handle window resize
    handleResize: function() {
        // Adjust grid layouts based on screen size
        const planGrids = document.querySelectorAll('.plan-grid');
        planGrids.forEach(grid => {
            const width = window.innerWidth;
            if (width < 768) {
                grid.style.gridTemplateColumns = '1fr';
            } else if (width < 992) {
                grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
            } else {
                grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(320px, 1fr))';
            }
        });
    },
    
    // Utility functions
    utils: {
        // Format currency
        formatCurrency: function(amount, currency = 'টাকা') {
            return `${amount} ${currency}`;
        },
        
        // Validate email
        validateEmail: function(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        
        // Validate phone
        validatePhone: function(phone) {
            const re = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            return re.test(phone);
        },
        
        // Debounce function
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    SME_CUBE.init();
});

// Global functions for backward compatibility
function showSection(sectionName) {
    SME_CUBE.showSection(sectionName);
}

function contactForDomain() {
    SME_CUBE.showOrderModal('ডোমেইন', 'domain');
}

function contactForHosting(plan) {
    SME_CUBE.showOrderModal(`${plan} হোস্টিং প্ল্যান`, 'hosting');
}
