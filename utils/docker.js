const options = require('../config/docker.config')
const { Docker } = require('docker-cli-js');

const docker = new Docker(options)

module.exports = docker;
