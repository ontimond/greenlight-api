const greenlight = require('../utils/greenlight');

const signUp = async (req, res, next) => {
    try {
        const user = { name, email, password, type } = req.body;

        await greenlight.createUser(name, email, password, type);

        res.status(200).json({
            message: "Sign up success",
            user
        })

    } catch (error) {
        res.status(400).json({
            message: "Bad request",
            error
        })
    }
}

module.exports = {
    signUp
}
