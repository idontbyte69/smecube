// SME CUBE - React Components (Vanilla JS Implementation)

// Base Component Class
class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
        this.element = null;
    }
    
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
    
    render() {
        throw new Error('Render method must be implemented');
    }
    
    mount(container) {
        this.element = this.render();
        if (container) {
            container.appendChild(this.element);
        }
        return this.element;
    }
    
    unmount() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
}

// Tab Component
class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.activeTab || 0
        };
    }
    
    setActiveTab(index) {
        this.setState({ activeTab: index });
    }
    
    render() {
        const { tabs, children } = this.props;
        const { activeTab } = this.state;
        
        const tabContainer = document.createElement('div');
        tabContainer.className = 'tab-container';
        
        // Create tab buttons
        const tabButtons = document.createElement('div');
        tabButtons.className = 'tab-buttons';
        
        tabs.forEach((tab, index) => {
            const button = document.createElement('button');
            button.className = `tab-button ${index === activeTab ? 'active' : ''}`;
            button.textContent = tab.label;
            button.onclick = () => this.setActiveTab(index);
            tabButtons.appendChild(button);
        });
        
        // Create tab content
        const tabContent = document.createElement('div');
        tabContent.className = 'tab-content';
        tabContent.innerHTML = children[activeTab] || '';
        
        tabContainer.appendChild(tabButtons);
        tabContainer.appendChild(tabContent);
        
        return tabContainer;
    }
}

// Plan Card Component
class PlanCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }
    
    handleOrder() {
        const { onOrder, plan } = this.props;
        if (onOrder) {
            onOrder(plan);
        }
    }
    
    render() {
        const { plan, featured = false } = this.props;
        const { isHovered } = this.state;
        
        const card = document.createElement('div');
        card.className = `plan-card ${featured ? 'featured' : ''}`;
        
        card.innerHTML = `
            <h3 class="plan-title">${plan.title}</h3>
            <div class="plan-price">${plan.storage}</div>
            <p>${plan.duration}</p>
            <ul class="plan-features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="order-button" data-plan="${plan.storage}">অর্ডার করুন</button>
        `;
        
        // Add hover effects
        card.addEventListener('mouseenter', () => {
            this.setState({ isHovered: true });
        });
        
        card.addEventListener('mouseleave', () => {
            this.setState({ isHovered: false });
        });
        
        // Add order button click handler
        const orderButton = card.querySelector('.order-button');
        orderButton.addEventListener('click', () => this.handleOrder());
        
        return card;
    }
}

// Data Table Component
class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortColumn: null,
            sortDirection: 'asc'
        };
    }
    
    handleSort(column) {
        const { sortColumn, sortDirection } = this.state;
        const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
        this.setState({ 
            sortColumn: column, 
            sortDirection: newDirection 
        });
    }
    
    render() {
        const { data, columns } = this.props;
        const { sortColumn, sortDirection } = this.state;
        
        const table = document.createElement('table');
        table.className = 'data-table';
        
        // Create header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        columns.forEach(column => {
            const th = document.createElement('th');
            th.textContent = column.label;
            th.style.cursor = 'pointer';
            th.onclick = () => this.handleSort(column.key);
            
            if (sortColumn === column.key) {
                th.innerHTML += ` ${sortDirection === 'asc' ? '↑' : '↓'}`;
            }
            
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create body
        const tbody = document.createElement('tbody');
        
        data.forEach(row => {
            const tr = document.createElement('tr');
            
            columns.forEach(column => {
                const td = document.createElement('td');
                const value = row[column.key];
                
                if (column.type === 'price') {
                    td.className = 'price-cell';
                    td.textContent = `${value} টাকা`;
                } else {
                    td.textContent = value;
                }
                
                tr.appendChild(td);
            });
            
            tbody.appendChild(tr);
        });
        
        table.appendChild(tbody);
        
        return table;
    }
}

// Contact Form Component
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            },
            errors: {},
            isSubmitting: false
        };
    }
    
    handleInputChange(field, value) {
        this.setState({
            formData: {
                ...this.state.formData,
                [field]: value
            }
        });
    }
    
    validateForm() {
        const { formData } = this.state;
        const errors = {};
        
        if (!formData.name.trim()) {
            errors.name = 'নাম প্রয়োজন';
        }
        
        if (!formData.email.trim()) {
            errors.email = 'ইমেইল প্রয়োজন';
        } else if (!SME_CUBE.utils.validateEmail(formData.email)) {
            errors.email = 'সঠিক ইমেইল দিন';
        }
        
        if (!formData.phone.trim()) {
            errors.phone = 'ফোন নম্বর প্রয়োজন';
        } else if (!SME_CUBE.utils.validatePhone(formData.phone)) {
            errors.phone = 'সঠিক ফোন নম্বর দিন';
        }
        
        if (!formData.service.trim()) {
            errors.service = 'সার্ভিস নির্বাচন করুন';
        }
        
        this.setState({ errors });
        return Object.keys(errors).length === 0;
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }
        
        this.setState({ isSubmitting: true });
        
        // Simulate form submission
        setTimeout(() => {
            this.setState({ isSubmitting: false });
            this.props.onSubmit && this.props.onSubmit(this.state.formData);
        }, 2000);
    }
    
    render() {
        const { formData, errors, isSubmitting } = this.state;
        
        const form = document.createElement('form');
        form.className = 'contact-form';
        form.onsubmit = (e) => this.handleSubmit(e);
        
        form.innerHTML = `
            <div class="form-group">
                <label class="form-label">নাম *</label>
                <input 
                    type="text" 
                    class="form-input ${errors.name ? 'error' : ''}" 
                    value="${formData.name}"
                    onchange="this.handleInputChange('name', this.value)"
                />
                ${errors.name ? `<span class="error-message">${errors.name}</span>` : ''}
            </div>
            
            <div class="form-group">
                <label class="form-label">ইমেইল *</label>
                <input 
                    type="email" 
                    class="form-input ${errors.email ? 'error' : ''}" 
                    value="${formData.email}"
                    onchange="this.handleInputChange('email', this.value)"
                />
                ${errors.email ? `<span class="error-message">${errors.email}</span>` : ''}
            </div>
            
            <div class="form-group">
                <label class="form-label">ফোন নম্বর *</label>
                <input 
                    type="tel" 
                    class="form-input ${errors.phone ? 'error' : ''}" 
                    value="${formData.phone}"
                    onchange="this.handleInputChange('phone', this.value)"
                />
                ${errors.phone ? `<span class="error-message">${errors.phone}</span>` : ''}
            </div>
            
            <div class="form-group">
                <label class="form-label">সার্ভিস *</label>
                <select 
                    class="form-input ${errors.service ? 'error' : ''}" 
                    onchange="this.handleInputChange('service', this.value)"
                >
                    <option value="">সার্ভিস নির্বাচন করুন</option>
                    <option value="domain">ডোমেইন হোস্টিং</option>
                    <option value="ecommerce">ই-কমার্স</option>
                    <option value="marketing">মার্কেটিং</option>
                    <option value="consulting">কনসাল্টিং</option>
                </select>
                ${errors.service ? `<span class="error-message">${errors.service}</span>` : ''}
            </div>
            
            <div class="form-group">
                <label class="form-label">বার্তা</label>
                <textarea 
                    class="form-textarea" 
                    rows="4"
                    onchange="this.handleInputChange('message', this.value)"
                >${formData.message}</textarea>
            </div>
            
            <button type="submit" class="btn-primary" ${isSubmitting ? 'disabled' : ''}>
                ${isSubmitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
            </button>
        `;
        
        return form;
    }
}

// Modal Component
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen || false
        };
    }
    
    open() {
        this.setState({ isOpen: true });
    }
    
    close() {
        this.setState({ isOpen: false });
    }
    
    render() {
        const { title, children, onClose } = this.props;
        const { isOpen } = this.state;
        
        if (!isOpen) return null;
        
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" onclick="this.close()">&times;</button>
                </div>
                <div class="modal-body">
                    ${children}
                </div>
                <div class="modal-footer">
                    <button class="btn-secondary" onclick="this.close()">বন্ধ করুন</button>
                </div>
            </div>
        `;
        
        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.close();
                onClose && onClose();
            }
        });
        
        return modal;
    }
}

// Export components for use
window.SMEComponents = {
    Component,
    TabComponent,
    PlanCard,
    DataTable,
    ContactForm,
    Modal
};
