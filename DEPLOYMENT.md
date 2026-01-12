# How to Deploy to Vercel (Free)

Since this is a static site (HTML/CSS/JS), it is 100% free to host on Vercel's "Hobby" plan.

## Option 1: Drag & Drop (Easiest)
1. Go to [vercel.com](https://vercel.com) and sign up/log in.
2. Click **"Add New..."** -> **"Project"**.
3. Locate the `dist` folder in your project:
   `/Users/travisroach/Downloads/stitch_robotics_automation_landing_page/dist`
   *(You must run `npm run build` first to generate this)*
4. Drag that `dist` folder directly onto the Vercel dashboard.
5. Done! You will get a live URL (e.g., `stitch-robotics.vercel.app`).

## Option 2: Connect to GitHub (Recommended)
This creates a pipeline where every time you `git push`, the site updates automatically.

1. **Push your code to GitHub**:
   - Create a new repository on GitHub.
   - Run these commands in your terminal:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/stitch-robotics.git
     git push -u origin main
     ```
2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your generic **stitch-robotics** repo.
   - Vercel will auto-detect "Vite".
   - Click **Deploy**.

## Testing Before Deploying
Always make sure your production build works locally first:
```bash
npm run build
npm run preview
```
