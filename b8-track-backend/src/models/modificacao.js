const mongoose = require('mongoose');

const ModificacaoSchema = new mongoose.Schema({
  id_moto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Motocicleta',
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  data_modificacao: {
    type: Date,
    required: true,
    default: Date.now
  },
  valor: {
    type: Number,
    required: true
  }
}, {
  collection: 'modificacoes'
});

module.exports = mongoose.model('Modificacao', ModificacaoSchema);