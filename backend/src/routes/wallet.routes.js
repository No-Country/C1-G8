const { Router } = require('express')
const router =  Router()
const auth = require('../auth/auth')


const {buycontrollers ,viewcontrollers, editwallet } = require('../controller/wallet.controller')

router.post('/cryptobuy/:id',  buycontrollers);

router.get('/cryptoview/:id', viewcontrollers);

router.put('/editwallet/:id/:cryptoid', editwallet)



module.exports = router;
