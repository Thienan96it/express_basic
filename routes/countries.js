const app = require('express');
var router = app.Router();
const countryController = require('../controllers/country.controller')

/* GET users listing. */
/* GET users listing. */
router.get('/', countryController.findAll);

module.exports = router;

