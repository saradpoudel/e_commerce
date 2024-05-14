var express = require('express');
var authServices = require('../services/authServices');
var router = express.Router();

router.post('/register', async function (req, res, next) {
    const userData = req.body;
    await authServices.register(userData);
    res.json({ message: 'Register endpoint' });
});


module.exports = router;