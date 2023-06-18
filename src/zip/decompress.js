import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

import {
    FILE_COMPRESSED,
    FILE_DECOMPRESSED,
    FILENAME_COMPRESSED,
    FILENAME_DECOMPRESSED,
} from './constants.js';

export const decompress = async () => {
    const gunzip = createGunzip();
    const readStream = createReadStream(FILE_COMPRESSED);
    const writeStream = createWriteStream(FILE_DECOMPRESSED);

    readStream
        .pipe(gunzip)
        .pipe(writeStream)
        .on('finish', () => {
            process.stdout.write(
                `File "${FILENAME_COMPRESSED}" was successfully decompressed and saved as "${FILENAME_DECOMPRESSED}".`,
            );
        });
};

decompress();
