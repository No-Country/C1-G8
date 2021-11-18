const express = require('express' )
const cors = require('cors' )
const morgan = require('morgan' )
const app = express() 


//setting config
app.set('name', 'server')
app.set('port', process.env.PORT || 4000)



//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'))

//routes
app.get('/', (req, res) => {
    res.send('Hello world')
})

module.exports = app

