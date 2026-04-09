const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const secret = crypto.randomBytes(16).toString('hex'); // 32-char hex string

// ── Step 1: Write to zenvy-backend/.env ──────────────
const envPath = path.join(__dirname, '../.env');
let envContent = '';
try { envContent = fs.readFileSync(envPath, 'utf8'); } catch {}

if (envContent.includes('BACKEND_API_SECRET=')) {
  envContent = envContent.replace(/BACKEND_API_SECRET=.*/, 'BACKEND_API_SECRET=' + secret);
} else {
  envContent = envContent.trimEnd() + '\nBACKEND_API_SECRET=' + secret + '\n';
}
fs.writeFileSync(envPath, envContent);
console.log('✅ .env updated with BACKEND_API_SECRET');

// ── Step 2: Patch ZENVY_SECRET in index.html ─────────
const indexPath = path.join(__dirname, '../../index.html');
try {
  let html = fs.readFileSync(indexPath, 'utf8');
  // Replaces any existing value inside the ZENVY_SECRET const — works on first run and re-runs
  html = html.replace(
    /const ZENVY_SECRET\s*=\s*['"][^'"]*['"]\s*;/,
    `const ZENVY_SECRET = '${secret}';`
  );
  fs.writeFileSync(indexPath, html);
  console.log('✅ index.html ZENVY_SECRET patched');
} catch (e) {
  console.error('❌ Could not patch index.html:', e.message);
  process.exit(1);
}

console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🔑 Generated Secret:', secret);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('👉 Set this in Railway environment variables:');
console.log('   BACKEND_API_SECRET=' + secret);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
