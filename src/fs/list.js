import { existsSync, readdir } from 'fs';
import { resolve } from 'path';
import { getDirname, throwError } from './utils.js';
import { FILES_FOLDER } from '../constants.js';

const __dirname = getDirname();

export const list = async () => {
    const filesFolderPath = resolve(__dirname, FILES_FOLDER);
    const isFolderExist = existsSync(filesFolderPath);

    if (!isFolderExist) {
        throwError();
    }

    readdir(filesFolderPath, (readdirErr, files) => {
        if (readdirErr) {
            throw readdirErr;
        }

        console.log(files);

        if (files?.length < 1) {
            console.log(`No files in "${FILES_FOLDER}" folder`);
        }
    });
};

list();
