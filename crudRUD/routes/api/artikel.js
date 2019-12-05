const express = require('express');
const router = express.Router();

const api_artikel_controller = require('../../controllers/api/apiController');

router.get('/artikel', api_artikel_controller.list_artikels)

module.exports = router;