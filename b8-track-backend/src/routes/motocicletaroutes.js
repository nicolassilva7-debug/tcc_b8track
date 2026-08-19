const express = require('express');
const router = express.Router();
const MotocicletaController = require('../controllers/motocicletacontroller');
const auth = require('../middlewares/auth');

router.post('/motocicletas', auth, MotocicletaController.criar);
router.get('/motocicletas', auth, MotocicletaController.listar);
router.get('/motocicletas/:id', auth, MotocicletaController.buscarPorId);
router.put('/motocicletas/:id', auth, MotocicletaController.atualizar);
router.delete('/motocicletas/:id', auth, MotocicletaController.excluir);

module.exports = router;