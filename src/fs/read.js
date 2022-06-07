import { existsSync, readFile } from 'fs';
import { throwError } from '../utils/throw-error.js';
import { getSourcePath } from '../utils/get-source-path.js';

const FILE_TO_READ = 'fileToRead.txt';

export const read = async () => {
    const filePath = getSourcePath({
        url: import.meta.url,
        fileName: FILE_TO_READ,
    });

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
