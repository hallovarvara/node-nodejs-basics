import { createReadStream } from 'fs';
import { getSourcePath } from '../utils/get-source-path.js';

const FILE_TO_READ = 'fileToRead.txt';

export const read = async () => {
    const filePath = getSourcePath({
        url: import.meta.url,
        fileName: FILE_TO_READ,
    });

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
