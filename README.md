# Shrivanth K S — Professional Portfolio

A modern, high-performance portfolio website built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**, featuring interactive project simulations, verified Cisco credentials, and curriculum vitae download.

## 🚀 Deploying to GitHub Pages using GitHub Actions

This repository is already configured with an automated GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and deploys your site whenever you push changes to `main` or `master`.

### One-Time Setup in GitHub:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages via GitHub Actions"
   git push origin main
   ```

2. **Enable GitHub Pages via Actions**:
   - Go to your repository on GitHub.
   - Click on **Settings** (top right tab).
   - In the left sidebar, click **Pages** (under "Code and automation").
   - Under **Build and deployment** > **Source**, change the dropdown from *Deploy from a branch* to:
     👉 **GitHub Actions**

3. **That's it!**
   - Your site will automatically build and deploy.
   - You can watch the deployment progress in the **Actions** tab.
   - Your live site will be accessible at:
     `https://<your-github-username>.github.io/<your-repo-name>/`

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📁 Key Features
- **Interactive Credit Card Anomaly Detection Sandbox**
- **Interactive Fine Art Virtual Gallery**
- **Prompt Engineering Playground**
- **Cisco Certified Credentials Display**
- **Curriculum Vitae Preview & Text Download**
- **Adaptive Dark / Light Mode with Local Persistence**
