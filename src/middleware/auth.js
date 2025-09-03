const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'Access token required' });
    }
    
    const token = req.headers.authorization.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Contains the payload
        next();  // Continue to next middleware/route
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }

};

module.exports = { authenticateToken };