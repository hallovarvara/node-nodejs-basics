import path, { dirname } from 'path';
import { readFile } from 'fs/promises';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import sayHello from './files/c.js';
import { FILES_FOLDER } from '../constants.js';

sayHello();

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const unknownObjectPath = path.resolve(
    __dirname,
    FILES_FOLDER,
    `${random > 0.5 ? 'a' : 'b'}.json`,
);

const unknownObject = JSON.parse(
    await readFile(unknownObjectPath, { encoding: 'utf8' }),
);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer };
