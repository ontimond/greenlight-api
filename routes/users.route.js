const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const { body } = require('express-validator');
const { isUserType } = require('../utils/greenlight');
const validate = require('../utils/validate')

router.post('/signUp',
    validate([
        body('name').notEmpty(),
        body('email').isEmail().normalizeEmail(),
        body('password').isLength({ min: 6 }),
        body('type').optional().custom(isUserType)
    ]),
    userController.signUp
);

module.exports = router
