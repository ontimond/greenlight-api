const options = require('../config/docker.config')
const { Docker } = require('docker-cli-js');

module.exports = new Docker(options)