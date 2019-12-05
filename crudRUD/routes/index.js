var express = require('express');
var router = express.Router();


//require controller
var artikel_controller = require('../controllers/artikelController.js');
var application_controller = require('../controllers/applicationController.js');

/* ROUTER*/
router.get('/', application_controller.index);
router.get('/create', application_controller.create);
router.get('/dashboard', application_controller.dashboard);
router.get('/data_siswa', application_controller.data_siswa);
router.get('/edit/:artikelId', application_controller.edit);
router.get('/show/:artikelId', application_controller.show);
router.get('/delete:artikelId', application_controller.delete);



router.post('/create_detail', application_controller.create_detail);
router.post('/update_detail', artikel_controller.update_detail);


module.exports = router;