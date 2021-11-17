const axios = require('axios');


//devuelve lista de cryptomondeas y su cotizacion por unidad 
const cryptoResearch = async (req,res)=>{
    try {
        const { order, page } = req.query
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${order}&per_page=10&page=${page}&sparkline=false`)
        res.json(response.data)
    } catch (error) {
        res.json('error')
    }
}

//Función que devuelve una criptomoneda en particular
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
