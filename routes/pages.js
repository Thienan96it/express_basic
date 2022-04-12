const app = require('express');
var router = app.Router();
const pageController = require('../controllers/page.controller')

/* GET users listing. */
router.get('/', pageController.findAll);

module.exports = router;
