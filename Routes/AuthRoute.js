const express = require('express');
const router = express.Router();
const {Login,Register,ForgetPassword,ResetPassword , GetMe , Verify} = require('../Controllers/AuthController');
const {protect} = require('../Middlewares/authMiddleware');



router.post('/login',Login)
router.post('/register',Register)
router.get('/user/:id/confirm/:token',Verify)
router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:token',ResetPassword)

// router.post('api/auth/login',Login)

module.exports = router 