import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

import {
    FILE_DECOMPRESSED,
    FILE_COMPRESSED,
    FILENAME_DECOMPRESSED,
    FILENAME_COMPRESSED,
} from './constants.js';

export const compress = async () => {
    const gzip = createGzip();
    const readStream = createReadStream(FILE_DECOMPRESSED);
    const writeStream = createWriteStream(FILE_COMPRESSED);

    readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on('finish', () => {
            process.stdout.write(
                `File "${FILENAME_DECOMPRESSED}" was successfully compressed and saved as "${FILENAME_COMPRESSED}".`,
            );
        });
};

compress();
