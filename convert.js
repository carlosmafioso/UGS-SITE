const fs = require('fs');
let html = fs.readFileSync('candidatura_raw.html', 'utf-8');

// Extract body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.log('No body found');
  process.exit(1);
}

let bodyHtml = bodyMatch[1];

// Convert class to className
bodyHtml = bodyHtml.replace(/class=/g, 'className=');

// Fix unclosed input tags
bodyHtml = bodyHtml.replace(/<input([^>]*?)>/g, (match, p1) => {
  if (p1.trim().endsWith('/')) return match;
  return `<input${p1} />`;
});

// Fix unclosed img tags
bodyHtml = bodyHtml.replace(/<img([^>]*?)>/g, (match, p1) => {
  if (p1.trim().endsWith('/')) return match;
  return `<img${p1} />`;
});

// Fix unclosed inline styles
bodyHtml = bodyHtml.replace(/style=\"([^\"]*)\"/g, (match, p1) => {
  if (p1.includes('font-variation-settings')) {
    return `style={{ fontVariationSettings: "'FILL' 1" }}`;
  }
  return match;
});

const tsxContent = `import Link from "next/link";

export default function Candidatura() {
  return (
    <div className="bg-background text-slate-900 min-h-screen selection:bg-orange-500/30">
      ${bodyHtml}
    </div>
  );
}
`;

fs.mkdirSync('src/app/candidatura', { recursive: true });
fs.writeFileSync('src/app/candidatura/page.tsx', tsxContent);
console.log('Created src/app/candidatura/page.tsx');
