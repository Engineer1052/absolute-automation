# Deployment Guide

## Option 1: Vercel (Recommended)
This is the fastest and most powerful way to host your site for free.

1. **Push your code to GitHub**: Create a repository (e.g., `absolute-automation`) and push your code.
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign up.
   - Click **"Add New..."** -> **"Project"**.
   - Import your GitHub repository.
3. **Deploy**: Vercel will automatically detect Vite. Click **Deploy**.
4. **Done**: You get a live URL and automatic updates every time you push code.

## Option 2: GitHub Pages
If you prefer to stay entirely within GitHub:

1. Go to your repo **Settings** -> **Pages**.
2. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
3. Select `main` branch and `/ (root)` folder.
4. Note: GitHub Pages often requires extra configuration for subfolders; Vercel is much smoother for this project.

## Local Build & Preview
Always test your build locally before pushing:
```bash
npm run build
npm run preview
```
```bash
npm run build
npm run preview
```
