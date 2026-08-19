const TrackDay = require('../models/TrackDay');

module.exports = {
  async criar(req, res) {
    try {
      const { id_moto, evento, circuito, data_evento } = req.body;

      const trackDay = await TrackDay.create({
        id_moto,
        evento,
        circuito,
        data_evento
      });

      return res.status(201).json(trackDay);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const trackDays = await TrackDay.find();

      return res.status(200).json(trackDays);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const trackDay = await TrackDay.findById(id);

      if (!trackDay) {
        return res.status(404).json({ erro: 'Track Day não encontrado.' });
      }

      return res.status(200).json(trackDay);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { id_moto, evento, circuito, data_evento } = req.body;

      const trackDay = await TrackDay.findByIdAndUpdate(
        id,
        { id_moto, evento, circuito, data_evento },
        { new: true, runValidators: true }
      );

      if (!trackDay) {
        return res.status(404).json({ erro: 'Track Day não encontrado.' });
      }

      return res.status(200).json(trackDay);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async excluir(req, res) {
    try {
      const { id } = req.params;

      const trackDay = await TrackDay.findByIdAndDelete(id);

      if (!trackDay) {
        return res.status(404).json({ erro: 'Track Day não encontrado.' });
      }

      return res.status(200).json({ mensagem: 'Track Day excluído com sucesso.' });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
};