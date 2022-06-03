import { existsSync, readFile } from 'fs';
import { resolve } from 'path';
import { FILES_FOLDER } from '../constants.js';
import { getDirname, throwError } from './utils.js';

const FILE_TO_READ = 'fileToRead.txt';

const __dirname = getDirname();

export const read = async () => {
    const filePath = resolve(__dirname, FILES_FOLDER, FILE_TO_READ);
    const isFileExist = existsSync(filePath);

    if (!isFileExist) {
        throwError();
    }

    readFile(filePath, { encoding: 'utf8' }, (readErr, fileContent) => {
        if (readErr) {
            throw readErr;
        }

        console.log(fileContent);
    });
};

read();
