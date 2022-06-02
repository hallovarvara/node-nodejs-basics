import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync, existsSync } from 'fs';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_FOR_HASHING = 'fileToCalculateHashFor.txt';

export const calculateHash = async () => {
    const filePath = resolve(__dirname, 'files', FILE_FOR_HASHING);

    if (!existsSync(filePath)) {
        throw new Error(`File "${FILE_FOR_HASHING}" doesn't exist`);
    }

    try {
        const fileBuffer = readFileSync(filePath);
        const hashSum = createHash('sha256');
        hashSum.update(fileBuffer);
        const hex = hashSum.digest('hex');

        console.log(`Hex of "${FILE_FOR_HASHING}" file is "${hex}"`);

        return hex;
    } catch (readErr) {
        throw readErr;
    }
};

calculateHash();
