import { fork } from 'child_process';
import { getSourcePath } from '../utils/get-source-path.js';

const FILE_TO_OPERATE = 'script.js';

const filePath = getSourcePath({
    url: import.meta.url,
    fileName: FILE_TO_OPERATE,
});

export const spawnChildProcess = async (args) => {
    fork(filePath, args);
};

spawnChildProcess([
    'hello',
    'some new argument',
    'previous was fine',
    'add more',
]);
