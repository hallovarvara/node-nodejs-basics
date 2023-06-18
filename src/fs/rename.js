import { existsSync, rename as renameFile } from 'fs';
import { throwError } from '../utils/throw-error.js';
import { getSourcePath } from '../utils/get-source-path.js';

const FILE_TO_RENAME = 'wrongFilename.txt';
const NEW_FILE_NAME = 'properFilename.md';

export const rename = async () => {
    const { url } = import.meta;
    const filePath = getSourcePath({ url, fileName: FILE_TO_RENAME });
    const newFilePath = getSourcePath({ url, fileName: NEW_FILE_NAME });

    const isFileExist = existsSync(filePath);
    const isFileRenamed = existsSync(newFilePath);

    if (!isFileExist || isFileRenamed) {
        throwError();
    }

    renameFile(filePath, newFilePath, (renameErr) => {
        if (renameErr) {
            throw renameErr;
        }

        console.log(
            `File "${FILE_TO_RENAME}" successfully renamed to "${NEW_FILE_NAME}"`,
        );
    });
};

rename();
