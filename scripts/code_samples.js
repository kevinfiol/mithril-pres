import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

function buildCodeSamples() {
    const codeSamples = {};
    try {
        const dirPath = join(__dirname, '../src/pages/');
        const dir = fs.readdirSync(dirPath);
        for (const file of dir) {
            const filePath = join(dirPath, file);
            const contents = fs.readFileSync(filePath, { encoding: 'utf8' });
            const fileKey = file.split('_')[1].split('.')[0]; // 0_HelloWorld.js -> HelloWorld
            codeSamples[fileKey] = contents;
        }

        const fileContents = `(function() { window.codeSamples = ${JSON.stringify(codeSamples)} })()`;
        const distPath = join(__dirname, '../dist/', 'code_samples.js');
        fs.writeFileSync(distPath, fileContents);
    } catch(e) {
        console.error('Could not build code samples file: ', e);
    }
}

export default buildCodeSamples;