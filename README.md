# Kayla Heady Portfolio

A clean, modern UX portfolio website built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
/
├── index.html          # Home page with hero and featured work
├── work.html           # All projects with filtering
├── case-study.html     # Dynamic case study template
├── about.html          # About page with skills and tools
├── contact.html        # Contact form and links
├── styles.css          # All styles
├── script.js           # Filtering and case study logic
└── assets/
    ├── img/            # Project images and thumbnails
    └── resume.pdf      # Resume download
```

## Features

- **Mobile-first responsive design**
- **Project filtering** on work page
- **Dynamic case studies** loaded from JavaScript
- **Smooth animations** and transitions
- **Accessible** with proper focus states and contrast
- **No frameworks** - pure HTML, CSS, and vanilla JS

## How to Deploy to GitHub Pages

### Option 1: Deploy from main branch (recommended)

1. **Create a GitHub repository:**
   - Go to GitHub and create a new repository (e.g., `portfolio` or `kayla-heady-portfolio`)
   - Don't initialize with README, .gitignore, or license (we already have files)

2. **Initialize git and push your code:**
   ```bash
   cd "/Users/kaylaheady/Desktop/Kayla's Portfolio"
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

4. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Deploy from gh-pages branch

If you prefer to keep your source code separate from the deployed site:

1. Follow steps 1-2 above to push to main branch
2. Create and push a gh-pages branch:
   ```bash
   git checkout -b gh-pages
   git push -u origin gh-pages
   ```
3. In GitHub Settings → Pages, select **gh-pages** branch instead of main

### Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file in the root with your domain name:
   ```
   www.yourdomain.com
   ```
2. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing `www` to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IP addresses

## Before Deploying

1. **Replace placeholder images:**
   - Add your actual project images to `/assets/img/`
   - See `/assets/img/README.md` for image requirements

2. **Update contact information:**
   - Replace `kayla.heady@example.com` with your actual email in:
     - `index.html` (footer)
     - `about.html` (footer)
     - `contact.html` (form action and email link)
     - `case-study.html` (footer)

3. **Update LinkedIn URL:**
   - Replace `https://linkedin.com/in/kaylaheady` with your actual LinkedIn profile in all HTML files

4. **Add your resume:**
   - Replace `/assets/resume.pdf` with your actual resume PDF

5. **Customize case study content:**
   - Edit the `caseStudies` object in `script.js` to match your actual projects
   - Update project data, metrics, and learnings

6. **Test locally:**
   - Open `index.html` in a browser
   - Test all links and navigation
   - Test the filtering on `work.html`
   - Test case study loading on `case-study.html`
   - Test the contact form (it will open your email client)

## Local Development

Simply open `index.html` in your browser. No build process or server required!

For a better development experience, you can use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (with http-server)
npx http-server

# Then visit http://localhost:8000
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## License

This portfolio is for personal use. Feel free to use it as a template for your own portfolio!

