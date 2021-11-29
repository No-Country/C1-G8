const Users = require('../model/User') 

const buycontrollers = async (req, res) => {  
    try{   
    const {id} = req.params
    const user = await Users.findById(id)
    const wallet = user.wallet
    const {name, quantity} = req.body    
    wallet.push({name, quantity})
    await user.save()
    res.json(user.wallet)
    }
    catch{ 
        res.json('error')
    }
}
const viewcontrollers = async (req, res) => {
    try{
        const {id} = req.params
        const user = await  Users.findById(id)
        
        res.json(user.wallet)

    }catch{ 
        res.json('error')

    }
}

module.exports = {buycontrollers ,viewcontrollers}