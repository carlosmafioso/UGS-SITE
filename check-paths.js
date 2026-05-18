const fs = require('fs');
const path = require('path');

// Check decania
const code = fs.readFileSync('src/app/sobre/page.tsx', 'utf8');
const regex = /\/images\/decania\/([^"']+)/g;
let match;
const refs = [];
while ((match = regex.exec(code)) !== null) {
  refs.push(match[1]);
}
console.log('=== Decania: Code references vs disk ===');
for (const ref of refs) {
  const filePath = path.join('public/images/decania', ref);
  const exists = fs.existsSync(filePath);
  console.log(exists ? '[OK]    ' : '[MISSING]', ref);
}

// Also check root-level images referenced in sobre
const rootRegex = /\/images\/([^/"']+\.(jpg|png|jpeg))/g;
const rootRefs = new Set();
while ((match = rootRegex.exec(code)) !== null) {
  rootRefs.add(match[1]);
}
console.log('\n=== Root images in sobre/page.tsx vs disk ===');
for (const ref of rootRefs) {
  const filePath = path.join('public/images', ref);
  const exists = fs.existsSync(filePath);
  console.log(exists ? '[OK]    ' : '[MISSING]', ref);
}
