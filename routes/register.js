const express = require('express');
const fs = require('fs');

const router = express.Router();
const USERS_FILE = 'users.json';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', {error: null});
});

router.post('/', function(req, res, next) {
    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        res.render('register', {error: "Passwords do not match!"})
    }

    const data = fs.readFileSync(USERS_FILE);
    let users = JSON.parse(data);
    users.push({email, password});
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
    res.redirect('/');
})

module.exports = router;
