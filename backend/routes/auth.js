var express = require('express');
var authServices = require('../services/authServices');
var router = express.Router();

router.post('/register', async function (req, res, next) {
    try {
        const userData = req.body;

        const existingUser = await authServices.getUserByEmail(userData.email);
        const existingUserPhone = await authServices.getUserByPhone(userData.tel);
        const messages = [];
        if (existingUser) {
            console.log(userData.email, existingUser.email)
            messages.push('Email already exists');

        }
        if (existingUserPhone) {
            console.log(userData.tel, existingUserPhone.tel)
            messages.push('Phone number already exists');

        }
        if (messages.length > 0) {
            return res.status(400).json({ error: { messages: messages } });
        }
        await authServices.register(userData);
        res.json({ success: { message: 'Registration successful' } });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: { message: 'some thing went wrong' } });
    }

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