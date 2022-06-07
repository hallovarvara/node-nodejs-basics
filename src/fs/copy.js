import {
    copyFileSync,
    mkdirSync,
    readdirSync,
    existsSync,
    lstatSync,
} from 'fs';

import { join } from 'path';
import { throwError } from '../utils/throw-error.js';
import { FILES_FOLDER } from '../constants.js';
import { getSourcePath } from '../utils/get-source-path.js';

const COPY_FOLDER = 'files_copy';

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
    const url = import.meta.url;

    const sourceFolder = getSourcePath({ url });
    const destinationFolder = getSourcePath({ url, folderName: COPY_FOLDER });

    copyRecursiveSync(sourceFolder, destinationFolder);

    console.log(
        `Folder "${FILES_FOLDER}" and it's content were successfully copied to "${COPY_FOLDER}" folder`,
    );
};

copy();
