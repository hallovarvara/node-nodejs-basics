import { workerData, parentPort } from 'worker_threads';

export const nthFibonacci = (n) =>
    n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    try {
        parentPort.postMessage({
            status: 'resolved',
            data: nthFibonacci(workerData),
        });
    } catch (error) {
        parentPort.postMessage({ status: 'error', data: null });
    }
};

sendResult();
