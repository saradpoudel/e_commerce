var express = require('express');
var authServices = require('../services/authServices');
var router = express.Router();

router.post('/register', async function (req, res, next) {
    const userData = req.body;
    await authServices.register(userData);
    res.json({ message: 'Register endpoint' });
});

router.get('/register', async function (req, res, next) {
    const users = await authServices.login();
    res.json(users);
});
module.exports = router;