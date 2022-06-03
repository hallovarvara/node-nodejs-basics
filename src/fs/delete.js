import { existsSync, unlink } from 'fs';
import { resolve } from 'path';
import { getDirname, throwError } from './utils.js';
import { FILES_FOLDER } from '../constants.js';

const __dirname = getDirname();

const FILE_TO_REMOVE = 'fileToRemove.txt';

export const remove = async () => {
    const filePath = resolve(__dirname, FILES_FOLDER, FILE_TO_REMOVE);
    const isFileExist = existsSync(filePath);

    if (!isFileExist) {
        throwError();
    }

    unlink(filePath, (unlinkErr) => {
        if (unlinkErr) {
            throw unlinkErr;
        }

        console.log(`File "${FILE_TO_REMOVE}" was successfully deleted`);
    });
};

remove();
