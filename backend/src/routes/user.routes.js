const {Router} = require('express');
const router = Router();
const {createUser, loginUser } = require('../controller/user.controllers');

router.post('/create', createUser);
router.post('/login', loginUser);

module.exports = router;