const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  data_cadastro: {
    type: Date,
    required: true,
    default: Date.now
  }
}, {
  collection: 'usuarios'
});

module.exports = mongoose.model('Usuario', UsuarioSchema);