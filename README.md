# SME CUBE - Pull & Push Workflow Guide

Welcome to the SME CUBE project! To maintain a clean and collaborative workflow, **every contributor must follow the pull and push system described below.**

---

## Workflow Instructions

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

Thank you for following the workflow and keeping the project organized!
