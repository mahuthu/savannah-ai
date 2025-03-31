const express = require('express');
const router = express.Router();
const { register, login, googleAuth, googleCallback } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/google', googleAuth);
router.get('/google/callback', googleCallback);

module.exports = router;