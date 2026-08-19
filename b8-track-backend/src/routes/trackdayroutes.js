const express = require('express');
const router = express.Router();
const TrackDayController = require('../controllers/trackdaycontroller');
const auth = require('../middlewares/auth');

router.post('/track-days', auth, TrackDayController.criar);
router.get('/track-days', auth, TrackDayController.listar);
router.get('/track-days/:id', auth, TrackDayController.buscarPorId);
router.put('/track-days/:id', auth, TrackDayController.atualizar);
router.delete('/track-days/:id', auth, TrackDayController.excluir);

module.exports = router;