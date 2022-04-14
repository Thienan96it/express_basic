var express = require('express');
// var router = express.Router();
var router = require('express').Router();
var authController = require('../controllers/auth.controller')

/* GET users listing. */
router.post('/signup', authController.signUp);
router.post('/login', authController.login);

router.get('/:id', function(req, res) {
  res.render('users', {title: "pug", content: "users"})
});

module.exports = router;
