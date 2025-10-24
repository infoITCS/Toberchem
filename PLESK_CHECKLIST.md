# ✅ Plesk Deployment Checklist for ToberChem

## Pre-Deployment Requirements

### ✅ 1. Hosting Requirements
- [ ] Plesk hosting account with admin access
- [ ] Node.js support (version 18.x or higher)
- [ ] Git extension installed in Plesk
- [ ] Domain configured and pointing to hosting
- [ ] SSL certificate configured (recommended)

### ✅ 2. GitHub Repository Setup
- [ ] GitHub account created
- [ ] Repository created (public or private)
- [ ] Code pushed to main branch
- [ ] Repository URL ready: `https://github.com/USERNAME/REPO-NAME.git`

### ✅ 3. Project Files Ready
- [ ] `package.json` with correct Node.js version (✅ Done)
- [ ] `vite.config.ts` optimized for production (✅ Done)
- [ ] `.htaccess` file in `public/` folder (✅ Done)
- [ ] `plesk.deploy.sh` deployment script (✅ Done)
- [ ] Build tested locally with `npm run build` (✅ Done)

## Deployment Steps

### 🚀 Step 1: Plesk Configuration (5 minutes)

1. **Login to Plesk Control Panel**
   - Access your hosting control panel
   - Navigate to your domain

2. **Enable Node.js**
   ```
   Domains → [your-domain] → Node.js
   ✅ Enable Node.js
   ✅ Select version: 18.x or 20.x
   ✅ Document root: /httpdocs
   ✅ Click "Enable Node.js"
   ```

3. **Configure Git Repository**
   ```
   Domains → [your-domain] → Git
   ✅ Click "Add Repository"
   ✅ Repository URL: https://github.com/USERNAME/toberchem-website.git
   ✅ Branch: main
   ✅ Repository path: /httpdocs
   ✅ Click "OK"
   ```

### 🔧 Step 2: Deployment Actions (2 minutes)

1. **Set Deployment Script**
   ```
   Git → [your-repository] → "Additional Settings"
   ✅ Add deployment actions:
   ```
   ```bash
   npm ci --production=false
   npm run build
   cp -r dist/* ../
   cp public/.htaccess ../
   ```

2. **Or Use Custom Script**
   ```bash
   chmod +x plesk.deploy.sh && ./plesk.deploy.sh
   ```

### 🎯 Step 3: First Deployment (3 minutes)

1. **Deploy**
   ```
   Git → [your-repository] → "Pull Updates"
   ✅ Wait for deployment to complete
   ✅ Check for any errors in the log
   ```

2. **Verify Files**
   ```
   File Manager → httpdocs/
   ✅ index.html exists
   ✅ assets/ folder exists
   ✅ .htaccess exists
   ✅ vite.svg exists
   ```

### 🌐 Step 4: Testing (2 minutes)

1. **Visit Your Website**
   ```
   ✅ Open: https://yourdomain.com
   ✅ Check all sections load correctly:
      - Header navigation works
      - Welcome section displays
      - About Us section displays  
      - Contact Us section displays
      - Footer displays
   ✅ Test mobile responsiveness
   ✅ Test navigation scrolling
   ```

2. **Performance Check**
   ```
   ✅ Page loads quickly (< 3 seconds)
   ✅ Images load properly
   ✅ CSS styles applied correctly
   ✅ No console errors in browser
   ```

## Automatic Deployments (Optional)

### 🔄 Setup Webhooks

1. **In Plesk**
   ```
   Git → [your-repository] → Copy webhook URL
   ```

2. **In GitHub**
   ```
   Repository → Settings → Webhooks → Add webhook
   ✅ Payload URL: [paste from Plesk]
   ✅ Content type: application/json
   ✅ Events: Just the push event
   ✅ Active: ✅
   ```

Now every push to GitHub will auto-deploy! 🎉

## Troubleshooting Common Issues

### ❌ Issue: "npm: command not found"
**Solution:**
```
Plesk → Node.js → Enable Node.js → Save
```

### ❌ Issue: Build fails with TypeScript errors
**Solution:**
```bash
# In your local project
npm run build
# Fix any TypeScript errors, then push
```

### ❌ Issue: Page shows 404 on refresh
**Solution:**
```
✅ Ensure .htaccess is in httpdocs root
✅ Check Apache mod_rewrite is enabled
```

### ❌ Issue: Styles not loading
**Solution:**
```
✅ Clear browser cache
✅ Check assets/ folder exists in httpdocs
✅ Verify file permissions (644 for files, 755 for folders)
```

### ❌ Issue: Git pull fails
**Solution:**
```
✅ Check repository URL is correct
✅ Verify branch name is 'main'
✅ For private repos, add deploy key or token
```

## File Structure After Deployment

```
httpdocs/
├── index.html              ← Main HTML file
├── .htaccess              ← Apache configuration
├── vite.svg               ← Favicon
├── assets/
│   ├── index-[hash].css   ← Compiled CSS
│   ├── index-[hash].js    ← Main JavaScript
│   └── vendor-[hash].js   ← React libraries
└── [git-repo-folder]/     ← Your source code (hidden from web)
```

## Performance Optimizations Included

✅ **Gzip Compression** - Reduces file sizes by ~70%
✅ **Browser Caching** - Images cached for 1 year, CSS/JS for 1 month  
✅ **Code Splitting** - React libraries loaded separately
✅ **Minification** - All code minified for production
✅ **Security Headers** - XSS protection, content type sniffing prevention

## Maintenance

### 🔄 Regular Updates
```bash
# Local development
git add .
git commit -m "Update content"
git push origin main

# Plesk will auto-deploy (if webhooks enabled)
# Or manually: Git → Pull Updates
```

### 📊 Monitoring
- Check Plesk logs for deployment errors
- Monitor website uptime
- Review Google PageSpeed Insights monthly

## Support Contacts

- **Code Issues:** Check repository issues
- **Hosting Issues:** Contact your Plesk hosting provider  
- **Domain Issues:** Contact your domain registrar

---

**✅ Deployment Ready!** 
All requirements are met for successful Plesk deployment.
