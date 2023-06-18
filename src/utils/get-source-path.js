import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { FILES_FOLDER } from '../constants.js';

export const getSourcePath = ({
    url,
    folderName = FILES_FOLDER,
    fileName = '',
}) => {
    const __filename = fileURLToPath(url);
    const __dirname = dirname(__filename);
    return join(__dirname, folderName, fileName);
};
