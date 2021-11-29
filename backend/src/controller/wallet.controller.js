const Users = require('../model/User') 
const axios = require('axios')


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
    //    const myWallet = []
        
    //     user.wallet.map ( async   (item, index ) =>  {
    
    // try {
    //     const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${item.name}`)
    //     myWallet.push
    //     ({name: data.name, 
    //      quantity: item.quantity, 
    //      price: data.market_data.current_price.usd,
    //      Image: data.image.small,    
    //     })
    // } catch (error) {
    //     myWallet.push("error")
    // }       
    //     })
   
        res.json(user.wallet)

    }catch{ 
        res.json('error')

    }
}

module.exports = {buycontrollers ,viewcontrollers}