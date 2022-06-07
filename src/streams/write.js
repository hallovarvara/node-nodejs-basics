import { createWriteStream } from 'fs';
import { FILES_FOLDER, STOP_PHRASE } from '../constants.js';
import { getSourcePath } from '../utils/get-source-path.js';

const FILE_TO_WRITE = 'fileToWrite.txt';

export const write = async () => {
    const filePath = getSourcePath({
        url: import.meta.url,
        fileName: FILE_TO_WRITE,
    });

    const writeStream = createWriteStream(filePath, 'utf8');

    process.stdout.write(`
Welcome to stdin-writer bot!
Just type something in console, press Enter, and bot will write it in "${FILES_FOLDER}/${FILE_TO_WRITE}" file
If you would like to stop, type "${STOP_PHRASE}" on a new line and press Enter
    `);

    process.stdin.on('data', (chunk) => {
        const data = chunk.toString();

        if (data.slice(0, data.indexOf(' ')) === STOP_PHRASE) {
            process.stdout.write(
                '\n\nThanks for using stdin-writer bot! Have a great day! 👌 ',
            );
            process.exit();
        }

        writeStream.write(data);
    });
};

write();
