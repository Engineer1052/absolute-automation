import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/images';
// Ensure directory exists
if (!fs.existsSync(dir)) {
    console.error(`Directory ${dir} does not exist.`);
    process.exit(1);
}

const files = fs.readdirSync(dir).filter(f => f.match(/\.(png|jpg|jpeg)$/i));

console.log(`Found ${files.length} images to convert...`);

async function convert() {
    for (const file of files) {
        const input = path.join(dir, file);
        const output = path.join(dir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

        try {
            await sharp(input)
                .webp({ quality: 95 }) // Higher quality to prevent fuzziness
                .toFile(output);
            console.log(`✅ Converted ${file} -> ${path.basename(output)}`);
        } catch (err) {
            console.error(`❌ Failed to convert ${file}:`, err);
        }
    }
}

convert();
