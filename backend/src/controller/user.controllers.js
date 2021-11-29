const Users = require('../model/User') 
const jwt = require('jsonwebtoken');


const createUser = async (req, res) => {
    const { userName, email, password } = req.body;
    const user = new Users({ userName, email, password });
    try {
        await user.save();
       
        res.json({ user });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email});
        if (user) {
            if (user.password === password) {
                const token = jwt.sign({ user: user }, 'secret', { expiresIn: '1h' });
                res.json({ token });
            }
            else {
                res.json({ error: 'Invalid data' });
            }
        } else {
            res.json({ error: 'Invalid data' });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = { createUser, loginUser };