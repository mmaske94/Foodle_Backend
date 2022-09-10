const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');

router.post('/', userControllers.createNewUser)
router.post('/', userControllers.loginUser)

module.exports = router