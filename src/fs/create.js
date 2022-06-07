import { writeFile, existsSync } from 'fs';
import { FILES_FOLDER } from '../constants.js';
import { throwError } from '../utils/throw-error.js';
import { getSourcePath } from '../utils/get-source-path.js';

const FILENAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';

export const create = async () => {
    const filePath = getSourcePath({
        url: import.meta.url,
        fileName: FILENAME,
    });

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
