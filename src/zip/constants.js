import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { FILES_FOLDER } from '../constants.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const FILENAME_DECOMPRESSED = 'fileToCompress.txt';
export const FILENAME_COMPRESSED = 'archive.gz';

export const FILE_DECOMPRESSED = resolve(
    __dirname,
    FILES_FOLDER,
    FILENAME_DECOMPRESSED,
);

export const FILE_COMPRESSED = resolve(
    __dirname,
    FILES_FOLDER,
    FILENAME_COMPRESSED,
);
