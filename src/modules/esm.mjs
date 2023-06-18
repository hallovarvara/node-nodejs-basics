import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';
import { getSourcePath } from '../utils/get-source-path.js';
import sayHello from './files/c.js';

sayHello();

const random = Math.random();
const { url } = import.meta;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(url);
const __dirname = dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

const unknownObjectPath = getSourcePath({
    url,
    fileName: `${random > 0.5 ? 'a' : 'b'}.json`,
});

const unknownObject = JSON.parse(
    await readFile(unknownObjectPath, { encoding: 'utf8' }),
);

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
