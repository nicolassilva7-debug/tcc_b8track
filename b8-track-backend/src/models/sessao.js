const mongoose = require('mongoose');

const SessaoSchema = new mongoose.Schema({
  id_moto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Motocicleta',
    required: true
  },
  id_track_day: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TrackDay',
    required: true
  },
  numero_sessao: {
    type: Number,
    required: true
  }
}, {
  collection: 'sessoes'
});

module.exports = mongoose.model('Sessao', SessaoSchema);