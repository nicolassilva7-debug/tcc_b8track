const Modificacao = require('../models/Modificacao');

module.exports = {
  async criar(req, res) {
    try {
      const { id_moto, categoria, descricao, valor } = req.body;

      const modificacao = await Modificacao.create({
        id_moto,
        categoria,
        descricao,
        valor
      });

      return res.status(201).json(modificacao);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const modificacoes = await Modificacao.find();

      return res.status(200).json(modificacoes);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const modificacao = await Modificacao.findById(id);

      if (!modificacao) {
        return res.status(404).json({ erro: 'Modificação não encontrada.' });
      }

      return res.status(200).json(modificacao);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { id_moto, categoria, descricao, valor } = req.body;

      const modificacao = await Modificacao.findByIdAndUpdate(
        id,
        { id_moto, categoria, descricao, valor },
        { new: true, runValidators: true }
      );

      if (!modificacao) {
        return res.status(404).json({ erro: 'Modificação não encontrada.' });
      }

      return res.status(200).json(modificacao);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async excluir(req, res) {
    try {
      const { id } = req.params;

      const modificacao = await Modificacao.findByIdAndDelete(id);

      if (!modificacao) {
        return res.status(404).json({ erro: 'Modificação não encontrada.' });
      }

      return res.status(200).json({ mensagem: 'Modificação excluída com sucesso.' });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
};