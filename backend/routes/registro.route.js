const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registro.controller');

router.get('/', registroController.listarVisitantes);
router.post('/', registroController.agregarVisitante);

module.exports = router;
