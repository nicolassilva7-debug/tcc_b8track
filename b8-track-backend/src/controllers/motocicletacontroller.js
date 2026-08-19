const Motocicleta = require('../models/Motocicleta');

module.exports = {
  async criar(req, res) {
    try {
      const {
        id_usuario,
        marca,
        modelo,
        ano,
        potencia_original,
        potencia_atual,
        torque_original,
        torque_atual,
        peso
      } = req.body;

      const motocicleta = await Motocicleta.create({
        id_usuario,
        marca,
        modelo,
        ano,
        potencia_original,
        potencia_atual,
        torque_original,
        torque_atual,
        peso
      });

      return res.status(201).json(motocicleta);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const motocicletas = await Motocicleta.find();

      return res.status(200).json(motocicletas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const motocicleta = await Motocicleta.findById(id);

      if (!motocicleta) {
        return res.status(404).json({ erro: 'Motocicleta não encontrada.' });
      }

      return res.status(200).json(motocicleta);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const {
        id_usuario,
        marca,
        modelo,
        ano,
        potencia_original,
        potencia_atual,
        torque_original,
        torque_atual,
        peso
      } = req.body;

      const motocicleta = await Motocicleta.findByIdAndUpdate(
        id,
        {
          id_usuario,
          marca,
          modelo,
          ano,
          potencia_original,
          potencia_atual,
          torque_original,
          torque_atual,
          peso
        },
        { new: true, runValidators: true }
      );

      if (!motocicleta) {
        return res.status(404).json({ erro: 'Motocicleta não encontrada.' });
      }

      return res.status(200).json(motocicleta);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async excluir(req, res) {
    try {
      const { id } = req.params;

      const motocicleta = await Motocicleta.findByIdAndDelete(id);

      if (!motocicleta) {
        return res.status(404).json({ erro: 'Motocicleta não encontrada.' });
      }

      return res.status(200).json({ mensagem: 'Motocicleta excluída com sucesso.' });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
};