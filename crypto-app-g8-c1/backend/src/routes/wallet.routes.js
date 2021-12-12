const { Router } = require('express')
const router =  Router()
const auth = require('../auth/auth')


const {buycontrollers ,viewcontrollers, editwallet } = require('../controller/wallet.controller')

router.post('/cryptobuy/:id', auth, buycontrollers);

router.get('/cryptoview/:id', auth, viewcontrollers);

router.post('/editwallet/:id/:cryptoid', auth, editwallet)



module.exports = router;
