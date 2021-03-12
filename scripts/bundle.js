import esbuild from 'esbuild';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const entry = '../src/index.js';
const outfile = '../dist/bundle.js';

// client code bundling
function bundle(config = {}) {
    const opts = {
        target: 'es5',
        jsxFactory: 'm',
        jsxFragment: 'm.fragment',
        entryPoints: [join(__dirname, entry)],
        bundle: true,
        minify: true,
        outfile: join(__dirname, outfile),
        ...config
    };

    esbuild.build(opts).then(() => {
        console.log('\x1b[42m%s\x1b[0m', `Bundled: ${outfile}`);
    }).catch((e) => {
        console.error('\x1b[41m%s\x1b[0m', e.message);
    });
}

export default bundle;