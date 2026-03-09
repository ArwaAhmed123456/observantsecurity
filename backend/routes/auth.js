const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).send('Email already exists');

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role: role || 'client' // Default to client if not specified
        });

        await user.save();
        res.status(201).send({ message: 'User created successfully' });

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('Invalid Credentials');

        // Validate password
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(400).send('Invalid Credentials');

        // Create Token
        const token = jwt.sign(
            { _id: user._id, role: user.role, name: user.name },
            process.env.JWT_SECRET || 'secretKey',
            { expiresIn: '1d' }
        );

        res.header('auth-token', token).send({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

module.exports = router;
