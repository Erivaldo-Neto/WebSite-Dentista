const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './public/images';

fs.readdirSync(directory).forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const filePath = path.join(directory, file);
        const outputName = file.replace(/\.(png|jpg|jpeg)$/, '.webp');
        const outputPath = path.join(directory, outputName);

        sharp(filePath)
            .webp({ quality: 85 })
            .toFile(outputPath)
            .then(() => {
                console.log(`Converted ${file} to ${outputName}`);
                // Optionally delete the original
                // fs.unlinkSync(filePath);
            })
            .catch(err => console.error(`Error converting ${file}:`, err));
    }
});
