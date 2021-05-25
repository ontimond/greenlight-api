const { Options } = require('docker-cli-js');

console.log('process.env.GREENLIGHT_PATH', process.env.GREENLIGHT_PATH);

const options = new Options(
    null,
    process.env.GREENLIGHT_PATH,
    true,
);

module.exports = options;
