// import watch from 'node-watch';
import CheapWatch from 'cheap-watch';
import bundle from './bundle.js';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

let initialRun = true;

const createBundle = () => {
    console.log(`=> ${initialRun ? 'Bundling' : 'Rebundling'} client code...`);
    if (initialRun) initialRun = false;
    bundle({
        target: 'es5',
        minify: false,
        sourcemap: true
    });
};

// // initial run
createBundle();

// watch src dir
const watch = new CheapWatch({ dir: join(__dirname, '../src/') });
await watch.init();

watch.on('+', createBundle);
watch.on('-', createBundle);