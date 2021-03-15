import CheapWatch from 'cheap-watch';
import bundle from './bundle.js';
import { lstatSync } from 'fs';
import { spawn } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const ROOT_DIR = join(__dirname, '../');
const SRC_DIR = join(__dirname, '../src/');
const PORT = 5000;

let server = undefined;
let initialRun = true;

// initial run
startServer();
createBundle();

// watch src dir
const watch = new CheapWatch({ dir: SRC_DIR });
await watch.init();

watch.on('+', createBundle);
watch.on('-', createBundle);

function startServer() {
    if (server) return;

    function toExit() {
        if (server) server.kill(0);
    }

    server = spawn(join(ROOT_DIR, 'node_modules/.bin/sirv'), ['./dist', '--dev', '--single', '--port', `${PORT}`], {
        cwd: ROOT_DIR,
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
    });

    process.on('SIGTERM', toExit);
    process.on('exit', toExit);
}

function createBundle(path) {
    if (path && isDir(join(SRC_DIR, path.path))) return;
    console.log(`=> ${initialRun ? 'Bundling' : 'Rebundling'} client code...`);
    if (initialRun) initialRun = false;
    bundle({
        target: 'es5',
        minify: false,
        sourcemap: true
    });
}

function isDir(path) {
    return lstatSync(path).isDirectory();
}