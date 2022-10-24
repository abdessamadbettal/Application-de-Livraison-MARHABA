const express = require('express');
const router = express.Router();
const {Client} = require('../Controllers/AuthController');
const {protect} = require('../Middlewares/authMiddleware');



router.get('/client/me', Client)
// router.get('/manger/me',manger)
// router.get('/livreur/me',livreur)

// router.post('api/auth/login',Login)

module.exports = router 