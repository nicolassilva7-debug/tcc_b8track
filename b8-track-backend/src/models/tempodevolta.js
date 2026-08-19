const mongoose = require('mongoose');

const TempoDeVoltaSchema = new mongoose.Schema({
  id_sessao: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sessao',
    required: true
  },
  tempo: {
    type: String,
    required: true
  }
}, {
  collection: 'tempos_de_volta'
});

module.exports = mongoose.model('TempoDeVolta', TempoDeVoltaSchema);