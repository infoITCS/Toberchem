# ToberChem - Plesk Deployment Guide

This guide will help you deploy the ToberChem website to Plesk hosting via GitHub.

## Prerequisites

- A Plesk hosting account with Node.js support
- Git installed on your Plesk server
- GitHub account
- Domain configured in Plesk

## Step 1: Prepare Your GitHub Repository

1. Initialize Git in your project (if not already done):

```bash
git init
git add .
git commit -m "Initial commit - ToberChem website"
```

2. Create a new repository on GitHub:

   - Go to https://github.com/new
   - Name your repository (e.g., `toberchem-website`)
   - Don't initialize with README (we already have files)
   - Click "Create repository"

3. Push your code to GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/toberchem-website.git
git branch -M main
git push -u origin main
```

## Step 2: Configure Plesk

### Option A: Plesk Git Extension (Recommended)

1. **Install Git Extension** (if not already installed)

   - In Plesk, go to: Extensions > My Extensions
   - Find and install "Git" extension

2. **Set up Git Deployment**

   - Go to your domain in Plesk
   - Click on "Git" in the left sidebar
   - Click "Add Repository"
   - Enter your GitHub repository URL: `https://github.com/YOUR_USERNAME/toberchem-website.git`
   - Set the branch: `main`
   - Set the repository path (document root): `/httpdocs`
   - If private repo, add deploy key or personal access token

3. **Configure Deployment Actions**

   - After adding the repository, click "Configure"
   - Add the following deployment actions:

   ```bash
   # Install dependencies
   npm install

   # Build the project
   npm run build

   # Copy build files to document root
   cp -r dist/* ../
   ```

4. **Set Node.js Version**

   - Go to: Domains > your-domain.com > Node.js
   - Enable Node.js
   - Select Node.js version 18.x or higher
   - Set Document Root: `/httpdocs`
   - Application Startup File: (leave empty for static site)
   - Click "Enable Node.js"

5. **Deploy**
   - Go back to Git section
   - Click "Pull Updates" to trigger the first deployment

### Option B: Manual SSH Deployment

1. **Connect via SSH** to your Plesk server

2. **Navigate to your domain directory:**

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
```

3. **Clone the repository:**

```bash
git clone https://github.com/YOUR_USERNAME/toberchem-website.git .
```

4. **Install Node.js** (if not available):

   - Use Plesk Node.js manager or install via SSH

5. **Install dependencies:**

```bash
npm install
```

6. **Build the project:**

```bash
npm run build
```

7. **Move build files:**

```bash
mv dist/* .
```

## Step 3: Configure Document Root

1. In Plesk, go to: Domains > your-domain.com > Apache & nginx Settings
2. Set Document Root to: `/httpdocs` (or `/httpdocs/dist` if you don't move files)
3. Click "OK" to save

## Step 4: Automatic Deployments (Optional)

### Using GitHub Webhooks

1. **In Plesk:**

   - Go to Git extension for your repository
   - Copy the webhook URL provided

2. **In GitHub:**
   - Go to your repository
   - Click "Settings" > "Webhooks" > "Add webhook"
   - Paste the webhook URL from Plesk
   - Set Content type: `application/json`
   - Select "Just the push event"
   - Click "Add webhook"

Now, every time you push to GitHub, Plesk will automatically pull and deploy!

## Step 5: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Check that all sections are working:
   - Header navigation
   - Welcome section
   - About Us
   - Contact Us
   - Footer

## Common Issues & Troubleshooting

### Issue: "npm: command not found"

**Solution:** Enable Node.js in Plesk domain settings

### Issue: Build fails

**Solution:** Check Node.js version is 16.x or higher

### Issue: Page shows 404 on refresh

**Solution:** Ensure `.htaccess` file is in the document root (it should be copied from `public/.htaccess` during build)

### Issue: Styles not loading

**Solution:**

- Clear browser cache
- Check that build files are in the correct directory
- Verify file permissions (755 for directories, 644 for files)

### Issue: Files not updating after git pull

**Solution:**

- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and rebuild: `rm -rf node_modules && npm install && npm run build`

## Build Files Structure

After building, your `dist` folder will contain:

```
dist/
├── index.html
├── assets/
│   ├── [hash].css
│   └── [hash].js
├── vite.svg
└── .htaccess
```

## Environment Variables (if needed in future)

If you add environment variables:

1. Create `.env` file in Plesk
2. Add variables with `VITE_` prefix
3. Access in code with `import.meta.env.VITE_VARIABLE_NAME`

## Regular Updates

To update your live site:

```bash
# Local machine
git add .
git commit -m "Your update message"
git push origin main
```

If webhooks are configured, Plesk will auto-deploy. Otherwise, click "Pull Updates" in Plesk Git extension.

## Performance Optimization

The `.htaccess` file includes:

- ✅ Gzip compression
- ✅ Browser caching
- ✅ Security headers
- ✅ SPA routing support

## Support

For issues with:

- **Code/Features:** Check this repository's issues
- **Hosting:** Contact your Plesk hosting provider
- **Deployment:** Review this guide or Plesk Git documentation

---

**Last Updated:** October 2025
**React Version:** 19.x
**Node.js Required:** 16.x or higher
