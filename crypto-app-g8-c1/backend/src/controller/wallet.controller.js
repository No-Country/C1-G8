const Users = require('../model/User')
const axios = require('axios')

const getData = async (name,quantity)=>{
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${name}`)
        const results = {
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
        res.json(user.wallet)
    }
    catch {
        res.json('error')
    }
}
const viewcontrollers = async (req, res) => {
    try {
        const { id } = req.params
        const user = await Users.findById(id)
        const myWallet = await Promise.all(user.wallet.map((item)=>{
            return getData(item.name,item.quantity)
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
                Object.assign(w,req.body)
            }
        })
        await user.save()
        
        
        res.json(user.wallet)

    }catch{ 
        res.json('error')

    }
}

module.exports = { buycontrollers, viewcontrollers, editwallet }