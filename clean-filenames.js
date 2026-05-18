const fs = require('fs');
const path = require('path');

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function toSafeName(name) {
  let ext = path.extname(name);
  let base = path.basename(name, ext);
  
  // Remove accents, convert to lowercase
  let safeBase = removeAccents(base).toLowerCase();
  
  // Replace spaces and special characters with hyphens
  safeBase = safeBase.replace(/[^a-z0-9-]/g, '-');
  
  // Remove multiple hyphens
  safeBase = safeBase.replace(/-+/g, '-');
  
  // Remove trailing/leading hyphens
  safeBase = safeBase.replace(/^-+|-+$/g, '');
  
  return safeBase + ext.toLowerCase();
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  let changes = [];
  
  for (let item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      let safeDirName = toSafeName(item);
      let newDirPath = path.join(dir, safeDirName);
      
      if (item !== safeDirName) {
        console.log(`Renaming directory: ${item} -> ${safeDirName}`);
        fs.renameSync(fullPath, newDirPath);
        changes.push({ old: fullPath, new: newDirPath });
        processDirectory(newDirPath);
      } else {
        processDirectory(fullPath);
      }
    } else {
      let safeFileName = toSafeName(item);
      if (item !== safeFileName) {
        let newFilePath = path.join(dir, safeFileName);
        console.log(`Renaming file: ${item} -> ${safeFileName}`);
        fs.renameSync(fullPath, newFilePath);
        changes.push({ old: fullPath, new: newFilePath });
      }
    }
  }
  return changes;
}

const targetDirs = [
  path.join(__dirname, 'public/images/cursos'),
  path.join(__dirname, 'public/images/decania')
];

let allChanges = [];
for (let dir of targetDirs) {
  if (fs.existsSync(dir)) {
    allChanges = allChanges.concat(processDirectory(dir));
  }
}

console.log("Renaming complete.");
