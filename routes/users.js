const express = require('express');
const router = express.Router();
const user = require('../models/user');

//get users
router.get('/', (req, res, next) => {
    res.send('USERS');
});

// register
router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});


module.exports = router;