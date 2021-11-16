const {Router} = require('express');

const cryptoController = require('../controller/coins.controllers');



//Rutas de url
const router = Router();

router.get('/coinslist', cryptoController.cryptoResearch);

router.get('/:id', cryptoController.cryptoPull);




module.exports = router;

