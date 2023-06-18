import { ERROR_FS_OPERATION_FAILED } from '../constants.js';

export const throwError = () => {
    throw new Error(ERROR_FS_OPERATION_FAILED);
};
