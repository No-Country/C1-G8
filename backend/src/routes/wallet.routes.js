const { Router } = require('express')
const router =  Router()

const {buycontrollers ,viewcontrollers } = require('../controller/wallet.controller')

router.post('/cryptobuy/:id', buycontrollers);

router.get('/cryptoview/:id', viewcontrollers);

module.exports = router;