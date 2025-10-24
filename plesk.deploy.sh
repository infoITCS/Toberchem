#!/bin/bash
# Plesk Deployment Script for ToberChem
# This script will be executed by Plesk after git pull

echo "🚀 Starting ToberChem deployment..."

# Exit on error
set -e

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist
rm -rf node_modules/.cache

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Build the project
echo "🔨 Building project..."
npm run build

# Verify build output
if [ ! -f "dist/index.html" ]; then
    echo "❌ Build failed - index.html not found"
    exit 1
fi

# Copy build files to parent directory (httpdocs)
echo "📁 Copying files to document root..."
cp -rf dist/* ../

# Ensure .htaccess is copied
if [ -f "public/.htaccess" ]; then
    cp public/.htaccess ../
    echo "✅ .htaccess copied"
fi

# Set proper permissions
echo "🔐 Setting permissions..."
find ../ -type d -exec chmod 755 {} \;
find ../ -type f -exec chmod 644 {} \;

# Verify deployment
if [ -f "../index.html" ]; then
    echo "✅ Deployment completed successfully!"
    echo "🌐 Your ToberChem site should now be live!"
    echo "📊 Build stats:"
    ls -la ../assets/ | head -5
else
    echo "❌ Deployment failed - files not copied correctly"
    exit 1
fi

