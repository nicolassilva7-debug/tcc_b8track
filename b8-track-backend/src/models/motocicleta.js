const mongoose = require('mongoose');

const MotocicletaSchema = new mongoose.Schema({
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
  potencia_original: {
    type: Number,
    required: true
  },
  potencia_atual: {
    type: Number,
    required: true
  },
  torque_original: {
    type: Number,
    required: true
  },
  torque_atual: {
    type: Number,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  data_cadastro: {
    type: Date,
    required: true,
    default: Date.now
  }
}, {
  collection: 'motocicletas'
});

module.exports = mongoose.model('Motocicleta', MotocicletaSchema);