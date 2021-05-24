const { Options } = require('docker-cli-js');

module.exports = new Options(
    null,
    process.env.GREENLIGHT_PATH,
    true,
);