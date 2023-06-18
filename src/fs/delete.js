import { existsSync, unlink } from 'fs';
import { throwError } from '../utils/throw-error.js';
import { getSourcePath } from '../utils/get-source-path.js';

const FILE_TO_REMOVE = 'fileToRemove.txt';

export const remove = async () => {
    const filePath = getSourcePath({
        url: import.meta.url,
        fileName: FILE_TO_REMOVE,
    });

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
