// SME CUBE - Services Configuration

const SERVICES_CONFIG = {
    'domain-hosting': {
        title: 'ডোমেইন হোস্টিং সার্ভিস',
        description: 'আপনার ব্যবসার জন্য সেরা ডোমেইন এবং হোস্টিং সমাধান। ছোট ও মাঝারি ব্যবসার জন্য সাশ্রয়ী এবং নির্ভরযোগ্য সেবা।',
        icon: 'fas fa-server',
        color: '#ed2849',
        features: [
            'ডোমেইন রেজিস্ট্রেশন',
            'ওয়েব হোস্টিং',
            'ইমেইল হোস্টিং',
            'এসএসএল সার্টিফিকেট',
            '২৪/৭ সাপোর্ট'
        ],
        tabs: [
            {
                id: 'domain',
                label: 'ডোমেইন',
                content: 'domain-content'
            },
            {
                id: 'hosting',
                label: 'হোস্টিং',
                content: 'hosting-content'
            }
        ],
        plans: [
            {
                name: 'বেসিক প্ল্যান',
                storage: '১ জিবি',
                price: '২,০০০ টাকা',
                features: ['১ জিবি স্টোরেজ', '১০ জিবি ব্যান্ডউইথ', 'ইমেইল সাপোর্ট'],
                popular: false
            },
            {
                name: 'স্ট্যান্ডার্ড প্ল্যান',
                storage: '২ জিবি',
                price: '৩,৫০০ টাকা',
                features: ['২ জিবি স্টোরেজ', '২৫ জিবি ব্যান্ডউইথ', 'প্রায়োরিটি সাপোর্ট'],
                popular: true
            },
            {
                name: 'প্রিমিয়াম প্ল্যান',
                storage: '৩ জিবি',
                price: '৫,০০০ টাকা',
                features: ['৩ জিবি স্টোরেজ', '৫০ জিবি ব্যান্ডউইথ', '২৪/৭ ফোন সাপোর্ট'],
                popular: false
            }
        ]
    },
    
    'web-development': {
        title: 'ওয়েব ডেভেলপমেন্ট সার্ভিস',
        description: 'আপনার ব্যবসার জন্য পেশাদার ওয়েবসাইট তৈরি করুন। রেসপন্সিভ, দ্রুত এবং SEO অপটিমাইজড ওয়েবসাইট।',
        icon: 'fas fa-code',
        color: '#ed2849',
        features: [
            'রেসপন্সিভ ডিজাইন',
            'SEO অপটিমাইজেশন',
            'ফাস্ট লোডিং',
            'মোবাইল ফ্রেন্ডলি',
            'কন্টেন্ট ম্যানেজমেন্ট'
        ],
        tabs: [
            {
                id: 'packages',
                label: 'প্যাকেজ',
                content: 'packages-content'
            },
            {
                id: 'features',
                label: 'ফিচার',
                content: 'features-content'
            },
            {
                id: 'process',
                label: 'প্রক্রিয়া',
                content: 'process-content'
            }
        ],
        plans: [
            {
                name: 'বেসিক ওয়েবসাইট',
                storage: '৫ পেজ',
                price: '১৫,০০০ টাকা',
                features: ['৫টি পেজ', 'রেসপন্সিভ ডিজাইন', 'কন্ট্যাক্ট ফর্ম'],
                popular: false
            },
            {
                name: 'স্ট্যান্ডার্ড ওয়েবসাইট',
                storage: '১০ পেজ',
                price: '২৫,০০০ টাকা',
                features: ['১০টি পেজ', 'এডমিন প্যানেল', 'ব্লগ সিস্টেম'],
                popular: true
            },
            {
                name: 'প্রিমিয়াম ওয়েবসাইট',
                storage: 'অসীম পেজ',
                price: '৪৫,০০০ টাকা',
                features: ['অসীম পেজ', 'কাস্টম ফিচার', 'API ইন্টিগ্রেশন'],
                popular: false
            }
        ]
    },
    
    'facebook-boosting': {
        title: 'ফেসবুক বুস্টিং সার্ভিস',
        description: 'আপনার ব্যবসার জন্য ফেসবুক মার্কেটিং এবং পোস্ট বুস্টিং। টার্গেটেড অডিয়েন্সের কাছে পৌঁছান।',
        icon: 'fab fa-facebook',
        color: '#1877f2',
        features: [
            'ফেসবুক পেজ সেটআপ',
            'পোস্ট বুস্টিং',
            'টার্গেটেড অ্যাড',
            'অডিয়েন্স অ্যানালাইসিস',
            'কন্টেন্ট ক্রিয়েশন'
        ],
        tabs: [
            {
                id: 'packages',
                label: 'প্যাকেজ',
                content: 'packages-content'
            },
            {
                id: 'results',
                label: 'ফলাফল',
                content: 'results-content'
            },
            {
                id: 'strategy',
                label: 'কৌশল',
                content: 'strategy-content'
            }
        ],
        plans: [
            {
                name: 'বেসিক বুস্টিং',
                storage: '৫ পোস্ট',
                price: '৫,০০০ টাকা',
                features: ['৫টি পোস্ট বুস্ট', 'বেসিক টার্গেটিং', 'রিপোর্ট'],
                popular: false
            },
            {
                name: 'স্ট্যান্ডার্ড বুস্টিং',
                storage: '১৫ পোস্ট',
                price: '১২,০০০ টাকা',
                features: ['১৫টি পোস্ট বুস্ট', 'এডভান্স টার্গেটিং', 'ডিটেইল রিপোর্ট'],
                popular: true
            },
            {
                name: 'প্রিমিয়াম বুস্টিং',
                storage: '৩০ পোস্ট',
                price: '২০,০০০ টাকা',
                features: ['৩০টি পোস্ট বুস্ট', 'কাস্টম ক্যাম্পেইন', 'লাইভ সাপোর্ট'],
                popular: false
            }
        ]
    },
    
    'ecommerce': {
        title: 'ই-কমার্স সলুশন',
        description: 'আপনার ব্যবসার জন্য সম্পূর্ণ ই-কমার্স ওয়েবসাইট তৈরি করুন। পণ্য বিক্রয় থেকে শুরু করে অর্ডার ম্যানেজমেন্ট পর্যন্ত সব কিছু।',
        icon: 'fas fa-shopping-cart',
        color: '#ed2849',
        features: [
            'পণ্য ম্যানেজমেন্ট',
            'পেমেন্ট সিস্টেম',
            'অর্ডার ম্যানেজমেন্ট',
            'ইনভেন্টরি ট্র্যাকিং',
            'কাস্টমার অ্যাকাউন্ট'
        ],
        tabs: [
            {
                id: 'packages',
                label: 'প্যাকেজ',
                content: 'packages-content'
            },
            {
                id: 'features',
                label: 'ফিচার',
                content: 'features-content'
            },
            {
                id: 'process',
                label: 'প্রক্রিয়া',
                content: 'process-content'
            }
        ],
        plans: [
            {
                name: 'বেসিক স্টোর',
                storage: '১০০ পণ্য',
                price: '১৫,০০০ টাকা',
                features: ['১০০টি পণ্য', 'পেমেন্ট গেটওয়ে', 'অর্ডার ম্যানেজমেন্ট'],
                popular: false
            },
            {
                name: 'প্রিমিয়াম স্টোর',
                storage: '৫০০ পণ্য',
                price: '২৫,০০০ টাকা',
                features: ['৫০০টি পণ্য', 'এডভান্স পেমেন্ট', 'ইনভেন্টরি ম্যানেজমেন্ট'],
                popular: true
            },
            {
                name: 'এন্টারপ্রাইজ স্টোর',
                storage: 'অসীম পণ্য',
                price: '৪৫,০০০ টাকা',
                features: ['অসীম পণ্য', 'মাল্টি-ভেন্ডর', 'API ইন্টিগ্রেশন'],
                popular: false
            }
        ]
    }
};

// Service Page Generator
class ServicePageGenerator {
    constructor(serviceKey) {
        this.service = SERVICES_CONFIG[serviceKey];
        this.serviceKey = serviceKey;
    }
    
    generatePage() {
        if (!this.service) {
            throw new Error(`Service ${this.serviceKey} not found`);
        }
        
        return this.createPageHTML();
    }
    
    createPageHTML() {
        return `
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.service.title} - SME CUBE</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/components.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="navbar-content">
                <a href="index.html" class="navbar-brand">SME CUBE</a>
                <ul class="navbar-nav">
                    <li><a href="index.html" class="nav-link">হোম</a></li>
                    <li><a href="services/domain-hosting.html" class="nav-link">ডোমেইন হোস্টিং</a></li>
                    <li><a href="services/web-development.html" class="nav-link">ওয়েব ডেভেলপমেন্ট</a></li>
                    <li><a href="services/facebook-boosting.html" class="nav-link">ফেসবুক বুস্টিং</a></li>
                    <li><a href="services/ecommerce.html" class="nav-link">ই-কমার্স</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <!-- Service Header -->
        <div class="header">
            <h1><i class="${this.service.icon}"></i> ${this.service.title}</h1>
            <p>${this.service.description}</p>
        </div>
        
        <!-- Service Tabs -->
        <div class="tab-container">
            <div class="tab-buttons">
                ${this.service.tabs.map(tab => 
                    `<button class="tab-button" onclick="showSection('${tab.id}')">${tab.label}</button>`
                ).join('')}
            </div>
            
            ${this.service.tabs.map((tab, index) => `
                <div id="${tab.id}" class="tab-content ${index === 0 ? 'active' : ''}">
                    ${this.generateTabContent(tab.id)}
                </div>
            `).join('')}
        </div>
        
        <!-- Contact Section -->
        <div class="contact-section">
            <div class="card">
                <h3>আমাদের সাথে যোগাযোগ করুন</h3>
                <p>আপনার ব্যবসার জন্য সেরা সমাধান পেতে আজই যোগাযোগ করুন</p>
                <div class="contact-buttons">
                    <a href="tel:+8801711223344" class="btn-primary">
                        <i class="fas fa-phone"></i> +৮৮০ ১৭১১-২২৩৩৪৪
                    </a>
                    <a href="mailto:info@smecube.com" class="btn-secondary">
                        <i class="fas fa-envelope"></i> info@smecube.com
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <div class="footer">
        <div class="container">
            <h3>SME CUBE</h3>
            <p>আপনার ব্যবসার ডিজিটাল সহযাত্রী</p>
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>+৮৮০ ১৭১১-২২৩৩৪৪</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>info@smecube.com</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-clock"></i>
                    <span>সকাল ৯টা - বিকেল ৫টা</span>
                </div>
            </div>
        </div>
    </div>
    
    <script src="assets/js/main.js"></script>
    <script src="assets/js/components.js"></script>
    <script src="assets/js/services-config.js"></script>
</body>
</html>`;
    }
    
    generateTabContent(tabId) {
        switch(tabId) {
            case 'packages':
            case 'domain':
            case 'hosting':
                return this.generatePlansContent();
            case 'features':
                return this.generateFeaturesContent();
            case 'process':
                return this.generateProcessContent();
            case 'results':
                return this.generateResultsContent();
            case 'strategy':
                return this.generateStrategyContent();
            default:
                return '<p>কন্টেন্ট লোড হচ্ছে...</p>';
        }
    }
    
    generatePlansContent() {
        return `
            <div class="plan-grid">
                ${this.service.plans.map(plan => `
                    <div class="plan-card ${plan.popular ? 'featured' : ''}">
                        <h3 class="plan-title">${plan.name}</h3>
                        <div class="plan-price">${plan.storage}</div>
                        <p class="plan-duration">${plan.price}</p>
                        <ul class="plan-features">
                            ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        <button class="order-button" data-plan="${plan.name}">অর্ডার করুন</button>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    generateFeaturesContent() {
        return `
            <div class="grid grid-2">
                ${this.service.features.map(feature => `
                    <div class="card">
                        <h3><i class="${this.service.icon}"></i> ${feature}</h3>
                        <p>আপনার ব্যবসার জন্য ${feature} সেবা। পেশাদার সমাধান এবং ২৪/৭ সাপোর্ট।</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    generateProcessContent() {
        return `
            <div class="card">
                <h3>আমাদের কাজের প্রক্রিয়া</h3>
                <div class="grid grid-2">
                    <div>
                        <h4>১. পরামর্শ</h4>
                        <p>আপনার ব্যবসার প্রয়োজন বুঝে সেরা সমাধান দিই</p>
                    </div>
                    <div>
                        <h4>২. পরিকল্পনা</h4>
                        <p>বিস্তারিত পরিকল্পনা করে কাজ শুরু করি</p>
                    </div>
                    <div>
                        <h4>৩. বাস্তবায়ন</h4>
                        <p>পেশাদারভাবে সব কিছু তৈরি করি</p>
                    </div>
                    <div>
                        <h4>৪. হস্তান্তর</h4>
                        <p>সম্পূর্ণ প্রশিক্ষণ সহ হস্তান্তর করি</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateResultsContent() {
        return `
            <div class="grid grid-2">
                <div class="card">
                    <h3>ফলাফল</h3>
                    <p>আমাদের ক্লায়েন্টরা যে ফলাফল পেয়েছেন</p>
                </div>
                <div class="card">
                    <h3>সাফল্যের গল্প</h3>
                    <p>বাস্তব ক্লায়েন্টের সাফল্যের গল্প</p>
                </div>
            </div>
        `;
    }
    
    generateStrategyContent() {
        return `
            <div class="card">
                <h3>আমাদের কৌশল</h3>
                <p>আপনার ব্যবসার জন্য সেরা কৌশল</p>
            </div>
        `;
    }
}

// Export for use
window.SERVICES_CONFIG = SERVICES_CONFIG;
window.ServicePageGenerator = ServicePageGenerator;
