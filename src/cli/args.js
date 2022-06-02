const ARG_NAME_PREFIX = '--';

export const parseArgs = () => {
    let wasPrevArgName = false;

    const userArgs = process.argv.slice(2);

    const argsString = userArgs.reduce((result, argFromConsole) => {
        let newResult = result;
        const isArgName = argFromConsole.startsWith(ARG_NAME_PREFIX);
        const arg = isArgName ? argFromConsole.slice(2) : argFromConsole;

        if (newResult.length < 1) {
            newResult = arg;
        } else if (isArgName) {
            newResult += `, ${arg}`;
        } else if (wasPrevArgName) {
            newResult += ` is ${arg}`;
        }

        wasPrevArgName = isArgName;

        return newResult;
    }, '');

    console.log(argsString);
};

parseArgs();
