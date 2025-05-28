const express = require('express');
const router = express.Router();
const pilotoController = require('../controllers/piloto.controller');

router.get('/', pilotoController.listarEquiposConPilotos);

module.exports = router;

