var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');

router.post('/addtask',controller.addtask);
router.get('/',controller.index);
router.post('/removetask',controller.removetask);

module.exports = router;
