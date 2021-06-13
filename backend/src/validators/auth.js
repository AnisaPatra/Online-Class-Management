const {check, validationResult} =require('express-validator');

exports.validateSignupRequest = [
    check('name')
    .notEmpty()
    .withMessage('Name is required'),
    check('email')
    .isEmail()
    .withMessage('Email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 characters long'),
    check('phoneNumber')
    .isLength({min:10})
    .withMessage('Contact Number must be at least 10 characters long'),
    check('role')
    .notEmpty()
    .withMessage('Role is required'),
];


exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
    
}