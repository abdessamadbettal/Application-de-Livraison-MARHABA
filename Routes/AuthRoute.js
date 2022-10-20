const express = require('express');
const router = express.Router();
const {Login,Register,ForgetPassword,ResetPassword , GetMe , Verify} = require('../Controllers/AuthController');



router.post('/login',Login)
router.post('/register',Register)
router.get('/user/:id/confirm/:token',Verify)
router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:token',ResetPassword)
router.post('/me',GetMe)

// router.post('api/auth/login',Login)

module.exports = router 