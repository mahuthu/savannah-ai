const express = require('express');
const router = express.Router();
const { register, login, googleAuth, googleCallback, initiateGoogleAuth } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/google', googleAuth);
router.get('/google', initiateGoogleAuth);
router.get('/google/callback', googleCallback);

module.exports = router;