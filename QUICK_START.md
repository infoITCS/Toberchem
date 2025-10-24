# Quick Start Guide - Deploy to Plesk

## 🚀 Fast Track to Deployment

### 1️⃣ Push to GitHub (5 minutes)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: ToberChem website ready for deployment"

# Create GitHub repo at https://github.com/new
# Then link and push:
git remote add origin https://github.com/YOUR_USERNAME/toberchem-website.git
git branch -M main
git push -u origin main
```

### 2️⃣ Setup in Plesk (10 minutes)

1. **Login to Plesk** → Go to your domain

2. **Enable Node.js:**

   - Click "Node.js" in sidebar
   - Enable Node.js
   - Select version 18.x or higher
   - Save

3. **Add Git Repository:**

   - Click "Git" in sidebar
   - Click "Add Repository"
   - Repository URL: `https://github.com/YOUR_USERNAME/toberchem-website.git`
   - Branch: `main`
   - Click "OK"

4. **Configure Build:**

   - Click repository → "Additional Settings"
   - Add deployment script:

   ```bash
   npm install && npm run build && cp -r dist/* ../
   ```

   - Save

5. **Deploy:**
   - Click "Pull Updates"
   - Wait for build to complete
   - Done! 🎉

### 3️⃣ Verify

Visit your domain: `https://yourdomain.com`

---

## 📝 Alternative: Manual Upload (if Git not available)

1. Run build locally:

```bash
npm install
npm run build
```

2. Upload `dist` folder contents via FTP to `/httpdocs/`

3. Ensure `.htaccess` is uploaded

---

## 🔄 Future Updates

Just push to GitHub:

```bash
git add .
git commit -m "Updated content"
git push
```

Then in Plesk: Click "Pull Updates" (or it happens automatically with webhooks)

---

Need detailed instructions? See **DEPLOYMENT.md**
