const { Router } = require('express')
const router =  Router()
const auth = require('../auth/auth')

const {buycontrollers ,viewcontrollers } = require('../controller/wallet.controller')

router.post('/cryptobuy/:id', auth, buycontrollers);

router.get('/cryptoview/:id', auth,  viewcontrollers);

module.exports = router;
