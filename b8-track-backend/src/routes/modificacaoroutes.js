const express = require('express');
const router = express.Router();
const ModificacaoController = require('../controllers/modificacaocontroller');
const auth = require('../middlewares/auth');

router.post('/modificacoes', auth, ModificacaoController.criar);
router.get('/modificacoes', auth, ModificacaoController.listar);
router.get('/modificacoes/:id', auth, ModificacaoController.buscarPorId);
router.put('/modificacoes/:id', auth, ModificacaoController.atualizar);
router.delete('/modificacoes/:id', auth, ModificacaoController.excluir);

module.exports = router;