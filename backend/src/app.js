const express = require('express' )
const cors = require('cors' )
const morgan = require('morgan' )
const app = express()
const cryptoRoutes = require('./routes/conis.routes')


//setting config
app.set('name', 'Server')
app.set('port', process.env.PORT || 4000)



//middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api', cryptoRoutes );


module.exports = app

