const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login page' });
});

router.post('/', function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);
    res.redirect('/');
})

module.exports = router;
