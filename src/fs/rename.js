import { existsSync, rename as renameFile } from 'fs';
import { resolve } from 'path';
import { getDirname, throwError } from './utils.js';
import { FILES_FOLDER } from '../constants.js';

const FILE_TO_RENAME = 'wrongFilename.txt';
const NEW_FILE_NAME = 'properFilename.md';

const __dirname = getDirname();

export const rename = async () => {
    const filePath = resolve(__dirname, FILES_FOLDER, FILE_TO_RENAME);
    const newFilePath = resolve(__dirname, FILES_FOLDER, NEW_FILE_NAME);

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
