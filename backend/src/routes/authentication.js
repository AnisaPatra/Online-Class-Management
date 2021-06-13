const express = require('express');
const {signup, signin, signout, updateUser, deleteUser, getUserById, fileupload} = require('../controllers/user_authentication');
const router = express.Router();
const {requireSignin,upload} = require('../middleware/middleware');
const {validateSigninRequest,validateSignupRequest,isRequestValidated} = require('../validators/auth');

router.post('/signup',validateSignupRequest,isRequestValidated, signup);
router.post('/signin', validateSigninRequest,isRequestValidated,signin);
router.get('/signout',requireSignin,signout,);
router.delete('/users/:id',deleteUser);
router.get('/users/:id',requireSignin,getUserById);
router.put('/users/update/:id',requireSignin,upload.single('profileImg'),updateUser);
module.exports = router;