import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WORKER_PATH = resolve(__dirname, 'worker.js');
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
