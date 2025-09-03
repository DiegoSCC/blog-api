const bcrypt = require('bcryptjs');
const  User  = require('../models/users');
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { username, email, password, first_name, last_name } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email, 
            password: hashedPassword,  // use hashed version
            first_name,
            last_name
            });

        res.status(201).json({
            message: 'User registered successfully',
            user: { id: user.id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(400).json({
            error: 'Registration failed',
            message: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { username , password, } = req.body;

        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, username: user.username, email: user.email },
            token: token
        });

    } catch (error) {

        res.status(400).json({
            error: 'Please check your user/password',
            message: error.message
        });

    }
};

const me = (req, res) => {
  // req.user contains the decoded token info
  res.json({
    message: 'Current user',
    user: req.user
  });
};

module.exports = {
  register,
  login,
  me
};