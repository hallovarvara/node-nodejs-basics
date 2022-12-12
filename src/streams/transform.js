import { Transform, pipeline } from 'stream';
import { ERROR_FS_OPERATION_FAILED, STOP_PHRASE } from '../constants.js';

const reverseString = (str) => {
    const isNotReversible = typeof str !== 'string' || str.length < 2;
    return isNotReversible ? '' : str.split('').reverse().join('');
};

export const transform = async () => {
    const readable = process.stdin;
    const writable = process.stdout;

    process.stdout.write(`
Welcome to reverser bot!
Just type something in console, press Enter, and bot will reverse it for you and write to the console back
If you would like to stop, type "${STOP_PHRASE}" on a new line and press Enter
    `);

    const transformString = new Transform({
        transform(chunk, encoding, callback) {
            const data = chunk.toString().trim();

            if (data === STOP_PHRASE) {
                writable.write(
                    '\n\nThanks for using reverser bot! Have a great day! 👌 ',
                );

                process.exit();
            }

            const reversedChunk = reverseString(data);
            this.push(reversedChunk + '\n');
            callback();
        },
    });

    pipeline(readable, transformString, writable, (error) => {
        writable.write(ERROR_FS_OPERATION_FAILED);
    });
};

transform();
