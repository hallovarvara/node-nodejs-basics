import {
    copyFileSync,
    mkdirSync,
    readdirSync,
    existsSync,
    lstatSync,
} from 'fs';

import { resolve, join } from 'path';
import { getDirname, throwError } from './utils.js';
import { FILES_FOLDER } from './constants.js';

const FILES_FOLDER_COPY_NAME = 'files_copy';

const __dirname = getDirname();

const copyRecursiveSync = function (src, dest) {
    const isSourceExist = existsSync(src);
    const isDestinationExist = existsSync(dest);

    if (!isSourceExist || isDestinationExist) {
        throwError();
    }

    const sourceStats = isSourceExist && lstatSync(src);
    const isDirectory = isSourceExist && sourceStats.isDirectory();

    if (isDirectory) {
        mkdirSync(dest);

        readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(
                join(src, childItemName),
                join(dest, childItemName),
            );
        });
    } else {
        copyFileSync(src, dest);
    }
};

export const copy = async () => {
    const sourceFolder = resolve(__dirname, FILES_FOLDER);
    const destinationFolder = resolve(__dirname, FILES_FOLDER_COPY_NAME);

    copyRecursiveSync(sourceFolder, destinationFolder);

    console.log(
        `Folder "${FILES_FOLDER}" and it's content were successfully copied to "${FILES_FOLDER_COPY_NAME}" folder`,
    );
};

copy();
