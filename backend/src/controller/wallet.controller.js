const Users = require('../model/User') 

const buycontrollers = async (req, res) => {
    try{
        const {id} = req.params
        const user =  await Users.findById(id)
        /*const wallet = user.wallet
        wallet.push(req.body)
        await user.save()*/
        res.json(user)

    }catch{ 
        res.json('error')

    }
}
const viewcontrollers = async (req, res) => {
    try{
        const {id} = req.params
        const user = Users.findById(id)
        
        res.json(user.wallet)

    }catch{ 
        res.json('error')

    }
}

module.exports = {buycontrollers ,viewcontrollers}