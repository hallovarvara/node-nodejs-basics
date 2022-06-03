import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { FILES_FOLDER } from '../constants.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const FILE_TO_READ = 'fileToRead.txt';

export const read = async () => {
    const filePath = resolve(__dirname, FILES_FOLDER, FILE_TO_READ);
    const readStream = createReadStream(filePath, { highWaterMark: 10 });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('close', () => {
        console.log(
            "\n\n🎉 File was successfully read and now it's closed. Have a nice day!",
        );
    });

    readStream.on('error', (readError) => {
        console.error(`\n\n${readError.message}`);
    });
};

read();
