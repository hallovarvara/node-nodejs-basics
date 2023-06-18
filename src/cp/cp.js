import { fork } from 'child_process';
import { getSourcePath } from '../utils/get-source-path.js';

const FILE_TO_OPERATE = 'script.js';

const args = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
    const filePath = getSourcePath({
        url: import.meta.url,
        fileName: FILE_TO_OPERATE,
    });

    fork(filePath, [...args], {
        stdio: [process.stdin, process.stdout, process.stderr, 'ipc'],
    });
};

spawnChildProcess(args);
