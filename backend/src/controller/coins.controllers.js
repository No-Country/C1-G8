const axios = require('axios');


//Devuelve las cryptomondeas y su cotizacion por unidad 
const cryptoResearch = async (req,res)=>{
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1&sparkline=false`)
        res.json(response.data)
    } catch (error) {
        res.json('error')
    }
}

const cryptoPull = async (req,res)=>{
    try {
        const {id} = req.params
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        res.json(response.data)
    } catch (error) {
        res.json('error')
    }
}





module.exports = {
    cryptoResearch, 
    cryptoPull
}
