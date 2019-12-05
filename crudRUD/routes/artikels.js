var express = require('express');
var router = express.Router();
var express = require('express').Router();


//require controller
var artikel_controller = require('../controllers/artikelController.js');

/* localhost:3000/artikel*/
router.get('/', artikel_controller.index);
router.get('/create', artikel_controller.create);
router.get('/dashboard', artikel_controller.dashboard);
router.get('/data_siswa', artikel_controller.data_siswa);
router.get('/edit/:artikelId', artikel_controller.edit);
router.get('/delete/:artikelId', artikel_controller.delete);
router.get('/show/:artikelId', artikel_controller.show);



router.post('/create_detail', artikel_controller.create_detail);
router.post('/update_detail', artikel_controller.update_detail);

module.exports = router;