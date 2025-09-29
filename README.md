# SME CUBE - Digital Business Solutions Website

Welcome to the SME CUBE project! This is a comprehensive website for small and medium business owners in Bangladesh, providing digital solutions including domain hosting, e-commerce, marketing, and business consulting services.

## 🚀 Project Overview

**SME CUBE** is a multi-page website built with modern web technologies to serve small and medium business owners with digital solutions. The website includes various service pages, each designed to help businesses grow digitally.

### 🛠️ Technology Stack
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with responsive design
- **JavaScript** - Interactive functionality
- **React.js** - Component-based architecture for dynamic pages

### 📁 Project Structure
```
smecube/
├── index.html                    # Homepage with all services overview
├── services/                     # Individual service pages
│   ├── domain-hosting.html       # Domain Hosting Service
│   ├── web-development.html      # Web Development Service
│   ├── facebook-boosting.html    # Facebook Boosting Service
│   ├── ecommerce.html           # E-commerce Solutions
│   ├── marketing.html           # Digital Marketing Service
│   └── consulting.html          # Business Consulting Service
├── templates/                    # Reusable page templates
│   └── service-template.html    # Service page template
├── assets/                      # Static assets
│   ├── css/
│   │   ├── main.css            # Base styles & utilities
│   │   ├── components.css       # Reusable components
│   │   └── responsive.css      # Mobile-first responsive design
│   ├── js/
│   │   ├── main.js             # Core functionality
│   │   ├── components.js       # React-like components (Vanilla JS)
│   │   └── services-config.js  # Service configuration system
│   └── images/                 # Images and icons
├── components/                  # Future React components
└── README.md                   # This file
```

### 🎨 Design System
- **Background Color**: `#f6e3ec` (Light Pink)
- **Primary Color**: `#ed2849` (Red)
- **Text Color**: `#1e293b` (Dark Blue-Gray)
- **Font**: Noto Sans Bengali (Bengali support)

---

## 🔄 Development Workflow

To maintain a clean and collaborative workflow, **every contributor must follow the pull and push system described below.**

### 1. Clone the Repository

If you haven't already, clone the repository to your local machine:

```bash
git clone <repository-url>
cd smecube
```

---

### 2. Create a New Branch for Your Feature

Before starting any new feature or fix, **create your own branch**:

```bash
git checkout main
git pull origin main
git checkout -b feature/<your-feature-name>
```

- Replace `<your-feature-name>` with a short description of your feature (e.g., `feature/domain-search`).

---

### 3. Make Your Changes

- Work on your feature in your branch.
- Commit your changes with a meaningful message:

```bash
git add .
git commit -m "feat: add <your-feature-name>"
```

---

### 4. Pull Before You Push

**Always pull the latest changes from `main` before pushing:**

```bash
git checkout main
git pull origin main
git checkout feature/<your-feature-name>
git merge main
```

- Resolve any merge conflicts if they appear.

---

### 5. Push Your Feature Branch

Push your branch to the remote repository:

```bash
git push origin feature/<your-feature-name>
```

---

### 6. Create a Pull Request

- Go to GitHub and create a **Pull Request** from your feature branch to `main`.
- Assign reviewers if required.
- Wait for approval and merge.

---

## Important Rules

- **Never push directly to `main`.**
- **Every feature or fix must be in its own branch and commit.**
- **Pull and merge the latest `main` before pushing.**
- **Write clear commit messages.**

---

## 📄 Service Pages

The website includes the following service pages, each targeting small and medium business owners:

### 🏠 Current Pages
- **Homepage** (`index.html`) - Main landing page with all services overview
- **Domain Hosting Service** (`services/domain-hosting.html`) - Domain registration and web hosting solutions
- **Web Development** (`services/web-development.html`) - Professional website development
- **Facebook Boosting** (`services/facebook-boosting.html`) - Social media marketing and post boosting
- **E-commerce Solutions** (`services/ecommerce.html`) - Online store development
- **Digital Marketing** (`services/marketing.html`) - Comprehensive digital marketing services
- **Business Consulting** (`services/consulting.html`) - Professional business advice

### 🚧 Upcoming Services
- **Landing Page Design** - High-converting landing pages
- **Bulk SMS Service** - Mass messaging solutions
- **Graphic Design** - Visual design services
- **Chatbot Setup** - Automated customer service
- **Business Training** - Skill development programs

### 🎯 Target Audience
- Small business owners in Bangladesh
- Medium-sized enterprises
- Entrepreneurs looking for digital solutions
- Business owners seeking cost-effective digital services

## 🚀 Getting Started

### Prerequisites
- Basic knowledge of HTML, CSS, JavaScript
- Understanding of React.js components
- Git version control
- Text editor or IDE (VS Code recommended)

### Local Development
1. Clone the repository
2. Open any HTML file in your browser
3. For React components, use a local server
4. Follow the workflow guidelines above

### Development Guidelines
- Use Bengali language for all user-facing content
- Maintain consistent color scheme across all pages
- Ensure mobile responsiveness for all devices
- Follow semantic HTML structure
- Use React components for interactive elements

## 📱 Responsive Design
All pages are designed to work seamlessly across:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🤝 Contributing
1. Follow the workflow instructions above
2. Use meaningful commit messages
3. Test your changes on different devices
4. Ensure Bengali text displays correctly
5. Maintain the established design system

---

Thank you for following the workflow and keeping the project organized!
