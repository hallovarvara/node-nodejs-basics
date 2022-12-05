# Node.js basics

[Task assignment →](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md)  
[Task score →](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/score.md)

## Scripts

| Script                     | Result                                                                                                                                                                      |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `npm run fs:create`        | Creates in `fs/files` folder `fresh.txt`                                                                                                                                    |
| `npm run fs:copy`          | Copies `fs/files` and it's content to `fs/files_copy`                                                                                                                       |
| `npm run fs:rename`        | Renames in `fs/files` folder file `wrongFilename.txt` to `properFilename.md`                                                                                                |
| `npm run fs:delete`        | Removes in `fs/files` folder file `fileToRemove.txt`                                                                                                                        |
| `npm run fs:list`          | Shows in console list of entities in `fs/files`                                                                                                                             |
| `npm run fs:read`          | Shows in console content of `fs/files/fileToRead.txt` file                                                                                                                  |
| `npm run cli:args`         | Shows in console script args values in format `$key` is `$value`                                                                                                            |
| `npm run modules:cjsToEsm` | Shows in console results of running refactored `modules/cjsToEsm.cjs` file (new name is `esm.mjs`)                                                                          |
| `npm run hash:calcHash`    | Shows in console hash of `hash/files/fileToCalculateHashFor.txt` file                                                                                                       |
| `npm run stream:read`      | Shows in console content of `streams/files/fileToRead.txt` file (read by stream)                                                                                            |
| `npm run stream:write`     | Writes content from `stdin` to `streams/files/fileToWrite.txt` file (wrote by stream)                                                                                       |
| `npm run stream:transform` | Writes reversed content from `stdin` to console back (made by streams)                                                                                                      |
| `npm run zlib:compress`    | Compresses `zip/files/fileToCompress.txt` to `archive.gz`                                                                                                                   |
| `npm run zlib:decompress`  | Decompresses `zip/files/archive.gz` to `fileToCompress.txt`                                                                                                                 |
| `npm run wt:main`          | [Check "Worker Threads (src/wt)" part of task](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#worker-threads-srcwt)   |
| `npm run cp:cp`            | [Check "Child Processes (src/cp)" part of task](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#child-processes-srccp) |
