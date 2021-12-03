const {Router} = require('express');
const router = Router();
const {createUser, loginUser, logout } = require('../controller/user.controllers');



router.post('/create', createUser);



router.post('/login', loginUser);


router.get('/logout', logout)

module.exports = router;