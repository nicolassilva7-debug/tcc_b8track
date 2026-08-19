const mongoose = require('mongoose');

const TrackDaySchema = new mongoose.Schema({
  id_moto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Motocicleta',
    required: true
  },
  evento: {
    type: String,
    required: true
  },
  circuito: {
    type: String,
    required: true
  },
  data_evento: {
    type: Date,
    required: true
  }
}, {
  collection: 'track_days'
});

module.exports = mongoose.model('TrackDay', TrackDaySchema);