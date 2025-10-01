# SME CUBE — Web Project

This repository contains the web application for SME CUBE, featuring services for small and medium enterprises in Bangladesh. The application is built with React and includes pages for domain & hosting, web development, e-commerce solutions, and Facebook marketing.

## Brand Colors
- Background: `#f6e3ec`
- Accent: `#ed2849`
- Primary text: `#1e293b`

## Requirements
- Node.js >= 20.19.0 or >= 22.12.0 (required by Vite)
- npm, yarn, or pnpm

## Getting Started

### Installation
Clone the repository and install dependencies:

```bash
# Clone the repository
git clone git@github.com:idontbyte69/smecube.git

# Navigate to the project directory
cd smecube

# Install dependencies
npm install
```

### Development
Run the development server:

```bash
npm run dev
```

The application will be available at http://localhost:5173 by default.

### Building for Production
Create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

### Preview Production Build
To preview the production build locally:

```bash
npm run preview
```

## Git Workflow

### Pulling Latest Changes
To get the latest changes from the remote repository:

```bash
# Fetch and merge changes from the remote
git pull origin main
```

If you have local changes you want to temporarily save:

```bash
# From the root directory
git stash
git pull origin main
git stash pop  # Apply your saved changes back
```

### Pushing Your Changes
To push your changes to the remote repository:

```bash
# Check which files have been changed
git status

# Add your changes
git add .  # Add all changes
# OR
git add path/to/specific/file  # Add specific files

# Commit your changes with a meaningful message
git commit -m "Your descriptive commit message here"

# Push to the remote repository
git push origin main
```

### Creating a New Branch
For new features or significant changes:

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Push the new branch to remote
git push -u origin feature/your-feature-name
```

### Merging Changes
To merge changes from another branch:

```bash
# Switch to the target branch (e.g., main)
git checkout main
git merge feature/your-feature-name
git push origin main
```

## Project Structure
```
smecube/
├── public/           # Static assets
│   └── SME-Cube-logo.png
├── src/
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/        # Page components
│   │   ├── DomainHosting.jsx
│   │   └── WebDevelopment.jsx
│   ├── App.jsx       # Main application component
│   ├── index.css     # Global styles
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js    # Vite configuration
```

## Features
- Fully responsive design with 1240px max container width
- Bangla language interface targeting Bangladesh SME market
- Domain search functionality using RDAP
- Hosting plans with pricing
- Web development services
- Toggle UI for domain and hosting sections

## Scripts
- `dev`: Start development server
- `build`: Build for production
- `lint`: Run ESLint
- `preview`: Preview production build

## Tech Stack
- React 19
- React Router
- Tailwind CSS
- Vite

## Notes
- Custom CSS utilities are used instead of @apply to avoid VS Code analyzer warnings.
- The RDAP search may return 'unknown' for some TLDs depending on registry responses.
- The maximum content width is set to 1240px across all components.
- All Purchase ("ক্রয় করুন") buttons link to the authentication page.

## Contributing
Please follow these guidelines when contributing to this project:
- Use descriptive commit messages
- Follow the existing code style
- Test your changes thoroughly before pushing

## Last Updated
September 30, 2025

## Test Commit
trying to test