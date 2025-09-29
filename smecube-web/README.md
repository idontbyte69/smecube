# SME CUBE — Web Project

This repository contains the web application for SME CUBE, featuring services for small and medium enterprises in Bangladesh. The application is built with React and includes pages for domain & hosting, web development, e-commerce solutions, and Facebook marketing.

## Repository Structure Note
This project is structured with the React application in the `smecube-web` subdirectory of the main repository. All commands should be executed from within this directory.

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
cd smecube/smecube-web

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

### Important: Working with Nested Project Structure
Since the React application is in the `smecube-web` subdirectory, make sure you're in this directory when running npm commands, but in the root directory when performing git operations.

### Pulling Latest Changes
To get the latest changes from the remote repository:

```bash
# Navigate to the root directory if you're in the smecube-web subdirectory
cd ..

# Fetch and merge changes from the remote
git pull origin main

# Return to the React project directory for development
cd smecube-web
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
# Navigate to the root directory if you're in the smecube-web subdirectory
cd ..

# Check which files have been changed
git status

# Add your changes
git add smecube-web/  # Add all changes in the React app
# OR
git add smecube-web/path/to/specific/file  # Add specific files

# Commit your changes with a meaningful message
git commit -m "Your descriptive commit message here"

# Push to the remote repository
git push origin main
```

### Creating a New Branch
For new features or significant changes:

```bash
# From the root directory
git checkout -b feature/your-feature-name

# Push the new branch to remote
git push -u origin feature/your-feature-name
```

### Merging Changes
To merge changes from another branch:

```bash
# From the root directory
git checkout main
git merge feature/your-feature-name
git push origin main
```

## Project Structure
```
smecube/
└── smecube-web/          # React application
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
- Remember that the React app is in a subdirectory - run npm commands from smecube-web/ but git commands from the root directory

## Last Updated
September 30, 2025
