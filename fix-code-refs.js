const fs = require('fs');
const path = require('path');

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Map of old path segments to new path segments
const replacements = [
  // Licenciatura files
  ["ciencia politica e administração do territorio.jpg", "ciencia-politica-e-administracao-do-territorio.jpg"],
  ["comunicação empresarial e linguas.jpg", "comunicacao-empresarial-e-linguas.jpg"],
  ["engenharia informática.jpg", "engenharia-informatica.jpg"],
  ["gestão comercial e marketing1.jpg", "gestao-comercial-e-marketing1.jpg"],
  ["informática de gestão financeira.jpg", "informatica-de-gestao-financeira.jpg"],
  ["organização e gestão de empresas.jpg", "organizacao-e-gestao-de-empresas.jpg"],
  // Mestrado files
  ["engenharia informática.png", "engenharia-informatica.png"],
  ["gestão de recursos humanos.png", "gestao-de-recursos-humanos.png"],
  ["organização e gestão de empresas.png", "organizacao-e-gestao-de-empresas.png"],
  // Pós graduação directory
  ["pós graduação/", "pos-graduacao/"],
  ["Desenvolvimento de Aplicações para Dispositivos Móveis.jpg", "desenvolvimento-de-aplicacoes-para-dispositivos-moveis.jpg"],
  ["Direito Empresarial.png", "direito-empresarial.png"],
  ["Finanças e Mercados Financeiros.png", "financas-e-mercados-financeiros.png"],
  ["Gestão Comercial.png", "gestao-comercial.png"],
  ["Gestão da Logística e dos Transportes.png", "gestao-da-logistica-e-dos-transportes.png"],
  // Decania files
  ["3.-Carlos-Alberto-Messani-Decano-da-Faculdade-de-Engenharia-e-Novas-Tecnologias.jpg", "3-carlos-alberto-messani-decano-da-faculdade-de-engenharia-e-novas-tecnologias.jpg"],
  ["4.-Yosbel-C.-Izquierdo-Vice-Decano-para-Area-Cientifica-da-Faculdade-de-Engenharia-e-Novas-Tecnologias-768x1024.jpg", "4-yosbel-c-izquierdo-vice-decano-para-area-cientifica-da-faculdade-de-engenharia-e-novas-tecnologias-768x1024.jpg"],
  ["6.-Pedro-Afonso-Vice-Decano-para-Area-Cientifica-da-da-Faculdade-de-Ciencias-e-Juridicas-e-Politicas-768x1024.jpg", "6-pedro-afonso-vice-decano-para-area-cientifica-da-da-faculdade-de-ciencias-e-juridicas-e-politicas-768x1024.jpg"],
  ["Decano-da-Faculdade-de-Ciencias-Economicas-e-Empresariais-1369x1536.jpg", "decano-da-faculdade-de-ciencias-economicas-e-empresariais-1369x1536.jpg"],
  ["Vice-Decana-para-Area-Cientifica-da-Faculdade-de-Ciencias-Economicas-e-Empresariais-768x971.jpg", "vice-decana-para-area-cientifica-da-faculdade-de-ciencias-economicas-e-empresariais-768x971.jpg"],
  ["Vice-Decano-para-Area-Academica-da-Faculdade-de-Ciencias-Economicas-e-Empresariais-768x963.jpg", "vice-decano-para-area-academica-da-faculdade-de-ciencias-economicas-e-empresariais-768x963.jpg"],
  ["Vice-Decano-para-Area-Academica-da-Faculdade-de-Ciencias-Sociais-e-Desenvolvimento-Humano-768x875.jpg", "vice-decano-para-area-academica-da-faculdade-de-ciencias-sociais-e-desenvolvimento-humano-768x875.jpg"],
  ["Vice-Decano-para-Area-Cientifica-da-Faculdade-de-Ciencias-Sociais-e-Desenvolvimento-Humano-768x905.jpg", "vice-decano-para-area-cientifica-da-faculdade-de-ciencias-sociais-e-desenvolvimento-humano-768x905.jpg"],
  // Root-level images with uppercase (already renamed in the root but not in decania)
  ["Decano-da-Faculdade-de-Ciencias-Economicas-e-Empresariais-768x861.jpg", "decano-da-faculdade-de-ciencias-economicas-e-empresariais-768x861.jpg"],
  ["Decano-da-Faculdade-de-Ciencias-Economicas-e-Empresariais-913x1024.jpg", "decano-da-faculdade-de-ciencias-economicas-e-empresariais-913x1024.jpg"],
  ["Vice-Decano-para-Area-Academica-da-Faculdade-de-Ciencias-Sociais-e-Desenvolvimento-Humano-1348x1536.jpg", "vice-decano-para-area-academica-da-faculdade-de-ciencias-sociais-e-desenvolvimento-humano-1348x1536.jpg"],
  ["Vice-Reitor-para-Area-Academica-e-Apoio-ao-Estudante-Prof.-Doutor-Manuel-Afonso-1272x1536.jpg", "vice-reitor-para-area-academica-e-apoio-ao-estudante-prof-doutor-manuel-afonso-1272x1536.jpg"],
  ["Vice-Reitor-para-Area-Cientifica-e-Pos-graduacao-Prof.-Doutor-Mpanzo-Domingos-1149x1536.jpg", "vice-reitor-para-area-cientifica-e-pos-graduacao-prof-doutor-mpanzo-domingos-1149x1536.jpg"],
  ["Cursos-de-Verao-2023_v2.png", "cursos-de-verao-2023_v2.png"],
  ["LUCY.png", "lucy.png"],
  ["Legado.jpg", "legado.jpg"],
  ["Web-site.png", "web-site.png"],
];

// Files to process
const filesToProcess = [
  'src/app/cursos/[id]/page.tsx',
  'src/app/cursos/page.tsx',
  'src/app/sobre/page.tsx',
  'src/app/page.tsx',
  'src/app/candidatura/page.tsx',
  'src/app/noticias/page.tsx',
  'src/app/aeugs/page.tsx',
  'src/app/contacto/page.tsx',
  'src/app/campus/page.tsx',
  'src/components/HeroCarousel.tsx',
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/components/LucyChatWidget.tsx',
];

let totalChanges = 0;

for (const file of filesToProcess) {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) continue;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;
  
  for (const [oldStr, newStr] of replacements) {
    if (content.includes(oldStr)) {
      content = content.split(oldStr).join(newStr);
      console.log(`  [${file}] "${oldStr}" -> "${newStr}"`);
      changed = true;
      totalChanges++;
    }
  }
  
  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`  ✓ Updated ${file}`);
  }
}

console.log(`\nDone! ${totalChanges} replacements made.`);
