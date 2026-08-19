const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuariocontroller');
const auth = require('../middlewares/auth');

router.post('/usuarios', UsuarioController.criar);
router.post('/usuarios/login', UsuarioController.login);
router.get('/usuarios', auth, UsuarioController.listar);
router.get('/usuarios/:id', auth, UsuarioController.buscarPorId);
router.put('/usuarios/:id', auth, UsuarioController.atualizar);
router.delete('/usuarios/:id', auth, UsuarioController.excluir);

module.exports = router;