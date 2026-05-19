const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/components/HeroCarousel.tsx',
  'src/components/LucyChatWidget.tsx',
  'src/app/page.tsx',
  'src/app/sobre/page.tsx',
  'src/app/cursos/page.tsx',
  'src/app/cursos/[id]/page.tsx',
  'src/app/campus/page.tsx',
  'src/app/admin/media/page.tsx',
];

let totalChanges = 0;

for (const file of filesToProcess) {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) continue;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Count occurrences
  const matches = (content.match(/\n\s*unoptimized\s*\n/g) || []).length;
  const matches2 = (content.match(/\n\s*unoptimized\r?\n/g) || []).length;
  
  // Remove standalone "unoptimized" lines (prop without value)
  const newContent = content.replace(/^(\s*)unoptimized\r?\n/gm, '');
  
  if (newContent !== content) {
    const removed = content.split('\n').length - newContent.split('\n').length;
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`  ✓ ${file}: removed ${removed} 'unoptimized' props`);
    totalChanges += removed;
  } else {
    console.log(`  - ${file}: no changes needed`);
  }
}

console.log(`\nDone! Removed ${totalChanges} 'unoptimized' props total.`);
