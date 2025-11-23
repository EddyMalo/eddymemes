const fs = require('fs');
const path = require('path');

const imagesDir = 'img';
const outputFile = 'image_list.json';

const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Erreur lecture dossier img:', err);
    process.exit(1);
  }

  const images = files.filter(file => validExtensions.includes(path.extname(file).toLowerCase()));

  fs.writeFile(outputFile, JSON.stringify(images, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Erreur écriture image_list.json:', err);
      process.exit(1);
    }
    console.log(`Liste des images enregistrées dans ${outputFile}`);
  });
});
