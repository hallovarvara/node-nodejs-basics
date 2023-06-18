import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { getSourcePath } from '../utils/get-source-path.js';

const WORKER_PATH = getSourcePath({
    url: import.meta.url,
    folderName: '',
    fileName: 'worker.js',
});

const coresNumber = [...Array(cpus().length)].map((useless, i) => i + 10);

export const performCalculations = async () => {
    const results = await Promise.all(
        coresNumber.map(
            (sendToWorkerNumber) =>
                new Promise((resolve, reject) => {
                    const worker = new Worker(WORKER_PATH, {
                        workerData: sendToWorkerNumber,
                    });

                    worker.on('message', resolve);
                    worker.on('error', reject);
                }),
        ),
    );

    console.log(results);
};

performCalculations();
