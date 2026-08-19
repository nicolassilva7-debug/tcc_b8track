const TempoDeVolta = require('../models/TempoDeVolta');

module.exports = {
  async criar(req, res) {
    try {
      const { id_sessao, tempo } = req.body;

      const tempoDeVolta = await TempoDeVolta.create({ id_sessao, tempo });

      return res.status(201).json(tempoDeVolta);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const tempos = await TempoDeVolta.find();

      return res.status(200).json(tempos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const tempoDeVolta = await TempoDeVolta.findById(id);

      if (!tempoDeVolta) {
        return res.status(404).json({ erro: 'Tempo de volta não encontrado.' });
      }

      return res.status(200).json(tempoDeVolta);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { id_sessao, tempo } = req.body;

      const tempoDeVolta = await TempoDeVolta.findByIdAndUpdate(
        id,
        { id_sessao, tempo },
        { new: true, runValidators: true }
      );

      if (!tempoDeVolta) {
        return res.status(404).json({ erro: 'Tempo de volta não encontrado.' });
      }

      return res.status(200).json(tempoDeVolta);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async excluir(req, res) {
    try {
      const { id } = req.params;

      const tempoDeVolta = await TempoDeVolta.findByIdAndDelete(id);

      if (!tempoDeVolta) {
        return res.status(404).json({ erro: 'Tempo de volta não encontrado.' });
      }

      return res.status(200).json({ mensagem: 'Tempo de volta excluído com sucesso.' });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
};