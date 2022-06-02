import { resolve } from 'path';
import { writeFile, existsSync } from 'fs';
import { FILES_FOLDER } from './constants.js';
import { getDirname, throwError } from './utils.js';

const FILENAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';

export const create = async () => {
    const filePath = resolve(getDirname(), FILES_FOLDER, FILENAME);
    const isFileExist = existsSync(filePath);

    if (isFileExist) {
        throwError();
    }

    writeFile(filePath, FILE_CONTENT, (writeErr) => {
        if (writeErr) {
            throw writeErr;
        }

        console.log(
            `File "${FILENAME}" successfully created in "${FILES_FOLDER}" folder`,
        );
    });
};

create();
