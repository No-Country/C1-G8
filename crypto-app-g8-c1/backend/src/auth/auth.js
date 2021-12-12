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


    try {
        const strToken = req.headers.authorization
        if (!strToken) {
            res.json('You must login!')
        } else {
            const token = strToken.split(' ')[1]
            console.log(token)
            const topSecret = 'secret'
            const key = jsonwebtoken.verify(token, topSecret)
            console.log(key.user)
            const user = await Users.findById(key.user._id)
            if(!user) return res.json('User not found!')
            next()
        }
    } catch (error) {
        res.json('Login failure')
    }

}

module.exports = auth;