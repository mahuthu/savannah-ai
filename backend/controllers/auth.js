const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');
const bcrypt = require('bcryptjs');

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://4ce8-217-199-148-229.ngrok-free.app/api/auth/google/callback'
  // 'http://localhost:5000/auth/google/callback'
);

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// Generate API Key
const generateApiKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      apiKey: generateApiKey()
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      apiKey: user.apiKey,
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        apiKey: user.apiKey,
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};

exports.googleAuth = async (req, res) => {
  try {
    const { email, name, googleId } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        apiKey: user.apiKey,
        token: generateToken(user._id)
      });
    } else {
      user = await User.create({
        name,
        email,
        password: googleId,
        apiKey: generateApiKey()
      });

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        apiKey: user.apiKey,
        token: generateToken(user._id)
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error with Google authentication' });
  }
};

// Add a new route to initiate Google OAuth flow
exports.initiateGoogleAuth = (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email'],
    include_granted_scopes: true
  });
  res.redirect(authUrl);
};

exports.googleCallback = async (req, res) => {
  try {
    const { code } = req.query;
    
    // Handle the OAuth callback
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Get user info from Google
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const { data } = await oauth2.userinfo.get();

    // Find or create user
    let user = await User.findOne({ email: data.email });

    if (!user) {
      user = await User.create({
        name: data.name,
        email: data.email,
        password: crypto.randomBytes(32).toString('hex'), // Random password for Google users
        apiKey: generateApiKey()
      });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // Redirect to frontend with token
    res.redirect(`https://3605-41-139-206-153.ngrok-free.app/auth/success?token=${token}`);
  } catch (error) {
    console.error('Google callback error:', error);
    res.redirect(`https://3605-41-139-206-153.ngrok-free.app/auth/error`);
  }
};