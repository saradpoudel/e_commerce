var express = require('express');
var authServices = require('../services/authServices');
var router = express.Router();

router.post('/register', async function (req, res, next) {
    const userData = req.body;
    await authServices.register(userData);
    res.json({ message: 'Register endpoint' });
});
router.post('/login', async function (req, res, next) {
    const userData = req.body;
    await authServices.login(userData);
    res.json({ message: 'Login successful', user })
});
router.get('/user-details', async function (req, res, next) {
    const users = await authServices.getUsers();
    res.json(users);
})
router.post('/contact', async function (req, res, next) {
    const contactData = req.body;
    await authServices.contact(contactData);
    res.json({ message: 'Contact endpoint' });
})


module.exports = router