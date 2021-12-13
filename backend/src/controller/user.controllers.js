const Users = require('../model/User')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
    const { userName, email, password } = req.body;
    const pass = bcrypt.hashSync(password, 10)
    console.log(pass)
    const user = new Users({ userName, email, password: bcrypt.hashSync(password, 10) });
    try {
        await user.save();
        res.json({ status:true, msg:'User created successfully'});
    } catch (error) {
        res.json({status: false, msg:'Some data is already in use'});
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    req.session._id = user._id
                    req.session.name = user.userName
                    const token = jwt.sign({ user: user }, 'secret', { expiresIn: '1h' });
                    res.json({ token, id: req.session._id, name: req.session.name });
                }
                else {
                    res.json({ error: 'Invalid data' });
                }
            })

        } else {
            res.json({ error: 'Invalid data' });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}


const logout = (req, res) => {
    try {
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    res.json('Unable to log out')
                } else {
                    res.json('Logout successful')
                }
            })
        }
    }
    catch (error) {
        res.json('Error logout')
    }
}
module.exports = { createUser, loginUser, logout };