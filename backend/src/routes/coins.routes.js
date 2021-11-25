const { Router } = require("express");
const router = Router();

//Destructuring
const {
  cryptoResearch,
  cryptoCotiz,
  cryptoPull,
} = require("../controllers/coins.controllers");

//Rutas de url
router.get("/coinslist", cryptoResearch);
router.get("/coinsQuote", cryptoCotiz);
router.get("/:id", cryptoPull);

module.exports = router;
