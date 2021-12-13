const Users = require('../model/User')
const axios = require('axios')

const getData = async (id,name,quantity)=>{
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${name}`)
        const results = {
            id:id,
            name:response.data.id,
            price:response.data.market_data.current_price.usd,
            image:response.data.image.large,
            quantity:quantity
        }
        return results
    } catch (error) {
        return error.message
    }
}

const buycontrollers = async (req, res) => {
    try {
        const { id } = req.params
        const user = await Users.findById(id)
        const wallet = user.wallet
        const { name, quantity } = req.body
        wallet.push({ name, quantity })
        await user.save()
        res.json({status:'success',msg:'Successful purchase'})
    }
    catch {
        res.json({status:'error',msg:'The purchase could not be made'})
    }
}
const viewcontrollers = async (req, res) => {
    try {
        const { id } = req.params
        const user = await Users.findById(id)
        const myWallet = await Promise.all(user.wallet.map((item)=>{
            return getData(item._id,item.name,item.quantity)
        })) 
        
        res.json(myWallet)

    } catch {
        res.json('error')

    }
}

const editwallet = async (req, res) => {
    try{
        const {id, cryptoid} = req.params
        const  user = await Users.findById(id)
        user.wallet.forEach(w => {
            if(w._id == cryptoid){
                w.name = req.body.name
                w.quantity = parseInt(w.quantity) + parseInt(req.body.quantity)
            }
        })
        await user.save()
        
        
        res.json({status:'success',msg:'Successful purchase'})

    }catch{ 
        res.json({status:'error',msg:'The purchase could not be made'})

    }
}

module.exports = { buycontrollers, viewcontrollers, editwallet }