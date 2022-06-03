import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ERROR_FS_OPERATION_FAILED } from '../constants.js';

export const getDirname = () => dirname(fileURLToPath(import.meta.url));

export const throwError = () => {
    throw new Error(ERROR_FS_OPERATION_FAILED);
};
