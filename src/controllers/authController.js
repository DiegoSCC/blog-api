const bcrypt = require('bcryptjs');
const  User  = require('../models/users');

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
  // Your login logic here (later)
};

module.exports = {
  register,
  login
};