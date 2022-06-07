import { getSourcePath } from '../utils/get-source-path.js';

export const FILENAME_DECOMPRESSED = 'fileToCompress.txt';
export const FILENAME_COMPRESSED = 'archive.gz';

const { url } = import.meta;

export const FILE_DECOMPRESSED = getSourcePath({
    url,
    fileName: FILENAME_DECOMPRESSED,
});

export const FILE_COMPRESSED = getSourcePath({
    url,
    fileName: FILENAME_COMPRESSED,
});
