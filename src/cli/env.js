const ENV_PREFIX = 'RSS_';
const ERROR_NO_ENV_VARIABLES = `\nNo environment variables with "${ENV_PREFIX}" were provided\n\nTry to run function from project root with a command like: \nRSS_test=23 RSS_hello=test RSS_UNI=show node src/cli/env.js\n\n`;

export const parseEnv = () => {
    const resultArr = Object.entries(process.env).reduce(
        (result, [name, value]) => {
            if (name.startsWith(ENV_PREFIX)) {
                result.push(`${name}=${value}`);
            }

            return result;
        },
        [],
    );

    console.log(
        resultArr.length > 0 ? resultArr.join('; ') : ERROR_NO_ENV_VARIABLES,
    );
};

parseEnv();
