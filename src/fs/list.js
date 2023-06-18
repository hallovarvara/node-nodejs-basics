import { existsSync, readdir } from 'fs';
import { throwError } from '../utils/throw-error.js';
import { FILES_FOLDER } from '../constants.js';
import { getSourcePath } from '../utils/get-source-path.js';

export const list = async () => {
    const filesFolderPath = getSourcePath({ url: import.meta.url });
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
