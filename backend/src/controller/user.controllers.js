const Users = require('../model/User') 
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
    const { userName, email, password } = req.body;
    const pass = bcrypt.hashSync(password, 10)
    console.log(pass)
    const user = new Users({  userName, email, password: bcrypt.hashSync(password, 10)  });
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
                req.session.id=user._id
                
                req.session.name=user.userName
                console.log(req.session.id)
                const token = jwt.sign({ user: user }, 'secret', { expiresIn: '1h' });
                res.json({ token, id:req.session.id, name:req.session.name });
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


const logout = async (req,res) => {
    try{
        req.session.destroy()
    req.json('the session is finish')

    }
    catch(error){
        res.json({error})
    }
}
module.exports = { createUser, loginUser, logout};