import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';
import { FILES_FOLDER } from '../constants.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_TO_OPERATE = 'script.js';
const filePath = resolve(__dirname, FILES_FOLDER, FILE_TO_OPERATE);

export const spawnChildProcess = async (args) => {
    fork(filePath, args);
};

spawnChildProcess([
    'hello',
    'some new argument',
    'previous was fine',
    'add more',
]);
