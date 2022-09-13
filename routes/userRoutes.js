const express = require('express');
const router = express.Router();
const authUser = require('../authUser')

const userControllers = require('../controllers/userControllers');

router.post('/users', userControllers.createNewUser)
router.post('/login', userControllers.loginUser)
router.post('/auto', authUser, userControllers.autoLogin)
router.post('/logout', authUser, userControllers.logoutUser)
router.post('/addToRecipes', userControllers.addToRecipes)


module.exports = router