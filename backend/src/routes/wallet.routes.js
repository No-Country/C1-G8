const { Router } = require('express')
const router =  Router()

const {buycontrollers ,viewcontrollers } = require('../controller/wallet.controller')

router.post('/cryptobuy',buycontrollers);

router.get('/cryptoview', viewcontrollers);

module.exports = router;