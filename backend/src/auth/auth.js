const Users = require('../model/User') 
const jsonwebtoken = require('jsonwebtoken')

const auth = async (req, res, next) => {
    // try {   
    //     const token = req.header('Authorization').replace('Bearer ', '')
    //     const decode = jsonwebtoken.verify(token, 'secret')
    //     const user = await Users.findOne({ _id: decode._id })
    //     if (!user) {
    //         throw new Error()
    //     }
    //     req.token = token
    //     req.user = user
    //     next()
    // } catch (e) {
    //     res.status(401).send({ error: 'Please authenticate' })
    // }

    const token = req.headers.authorization;

     if (!token) return res.send('Access denied. No token provided.');
     try {
         const data = token.split(' ')[1]
         console.log(data)
         const decoded = jsonwebtoken.verify(data, 'secret');
         const user = await Users.findById(decoded._id) ;
         if (!user) return res.json('user not found');
         next();
     } catch (e) {
         res.json('Invalid token.');
     }
    
    
}

module.exports = auth;