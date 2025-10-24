#!/usr/bin/env node
// Deployment Verification Script for ToberChem
// Run this after deployment to verify everything is working

import fs from 'fs';
import path from 'path';

console.log('🔍 Verifying ToberChem deployment...\n');

const checks = [
  {
    name: 'Build directory exists',
    check: () => fs.existsSync('dist'),
    fix: 'Run: npm run build'
  },
  {
    name: 'index.html exists',
    check: () => fs.existsSync('dist/index.html'),
    fix: 'Run: npm run build'
  },
  {
    name: 'Assets directory exists',
    check: () => fs.existsSync('dist/assets'),
    fix: 'Run: npm run build'
  },
  {
    name: '.htaccess exists in public',
    check: () => fs.existsSync('public/.htaccess'),
    fix: 'File should exist - check repository'
  },
  {
    name: 'package.json has engines',
    check: () => {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return pkg.engines && pkg.engines.node;
    },
    fix: 'Add engines field to package.json'
  },
  {
    name: 'Deployment script exists',
    check: () => fs.existsSync('plesk.deploy.sh'),
    fix: 'File should exist - check repository'
  }
];

let passed = 0;
let failed = 0;

checks.forEach(({ name, check, fix }) => {
  try {
    if (check()) {
      console.log(`✅ ${name}`);
      passed++;
    } else {
      console.log(`❌ ${name}`);
      console.log(`   Fix: ${fix}\n`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${name} (Error: ${error.message})`);
    console.log(`   Fix: ${fix}\n`);
    failed++;
  }
});

console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All checks passed! Ready for Plesk deployment.');
  console.log('\n📋 Next steps:');
  console.log('1. Push code to GitHub');
  console.log('2. Configure Git in Plesk');
  console.log('3. Run deployment');
  console.log('\nSee PLESK_CHECKLIST.md for detailed instructions.');
} else {
  console.log('⚠️  Please fix the failed checks before deploying.');
  process.exit(1);
}
