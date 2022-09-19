'use strict';

const router = require('express').Router();
const {checkUser} = require('../middlewares/userAuth');
const {signUp, signIn} = require('../controllers/userController');

router.post('/signup', checkUser,signUp);
router.post('/signin', signIn);



module.exports = router;