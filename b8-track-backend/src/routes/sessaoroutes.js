const express = require('express');
const router = express.Router();
const SessaoController = require('../controllers/sessaocontroller');
const auth = require('../middlewares/auth');

router.post('/sessoes', auth, SessaoController.criar);
router.get('/sessoes', auth, SessaoController.listar);
router.get('/sessoes/:id', auth, SessaoController.buscarPorId);
router.put('/sessoes/:id', auth, SessaoController.atualizar);
router.delete('/sessoes/:id', auth, SessaoController.excluir);

module.exports = router;