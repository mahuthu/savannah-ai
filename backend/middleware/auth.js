const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  try {
    let token;
    
    if (req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.headers['x-api-key']) {
      const user = await User.findOne({ apiKey: req.headers['x-api-key'] });
      if (user) {
        req.user = user;
        return next();
      }
    }

    if (!token) {
      return res.status(401).json({ 
        error: 'Not authorized to access this route' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Not authorized to access this route' });
  }
};