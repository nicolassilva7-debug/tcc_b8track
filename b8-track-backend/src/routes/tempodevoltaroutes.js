const express = require('express');
const router = express.Router();
const TempoDeVoltaController = require('../controllers/tempodevoltacontroller');
const auth = require('../middlewares/auth');

router.post('/tempos-de-volta', auth, TempoDeVoltaController.criar);
router.get('/tempos-de-volta', auth, TempoDeVoltaController.listar);
router.get('/tempos-de-volta/:id', auth, TempoDeVoltaController.buscarPorId);
router.put('/tempos-de-volta/:id', auth, TempoDeVoltaController.atualizar);
router.delete('/tempos-de-volta/:id', auth, TempoDeVoltaController.excluir);

module.exports = router;