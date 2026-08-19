const Sessao = require('../models/Sessao');

module.exports = {
  async criar(req, res) {
    try {
      const { id_moto, id_track_day, numero_sessao } = req.body;

      const sessao = await Sessao.create({
        id_moto,
        id_track_day,
        numero_sessao
      });

      return res.status(201).json(sessao);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const sessoes = await Sessao.find();

      return res.status(200).json(sessoes);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const sessao = await Sessao.findById(id);

      if (!sessao) {
        return res.status(404).json({ erro: 'Sessão não encontrada.' });
      }

      return res.status(200).json(sessao);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { id_moto, id_track_day, numero_sessao } = req.body;

      const sessao = await Sessao.findByIdAndUpdate(
        id,
        { id_moto, id_track_day, numero_sessao },
        { new: true, runValidators: true }
      );

      if (!sessao) {
        return res.status(404).json({ erro: 'Sessão não encontrada.' });
      }

      return res.status(200).json(sessao);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async excluir(req, res) {
    try {
      const { id } = req.params;

      const sessao = await Sessao.findByIdAndDelete(id);

      if (!sessao) {
        return res.status(404).json({ erro: 'Sessão não encontrada.' });
      }

      return res.status(200).json({ mensagem: 'Sessão excluída com sucesso.' });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
};