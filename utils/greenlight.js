const docker = require('../utils/docker')

const isUserType = (value) => value == 'user' || value == 'admin';


const createUser = (name, email, password, type = "user") => {

   console.log('docker', docker);
    return  docker.command(
        `exec greenlight-v2 bundle exec rake user:create["${name}","${email}","${password}","${type}"]`
    ) 
}

module.exports = {
    createUser,
    isUserType
}
