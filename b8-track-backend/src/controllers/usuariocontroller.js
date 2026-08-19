const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

module.exports = {
  async criar(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const senhaHash = await bcrypt.hash(senha, 10);

      const usuario = await Usuario.create({ nome, email, senha: senhaHash });

      const usuarioSemSenha = usuario.toObject();
      delete usuarioSemSenha.senha;

      return res.status(201).json(usuarioSemSenha);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const usuarios = await Usuario.find().select('-senha');

      return res.status(200).json(usuarios);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const usuario = await Usuario.findById(id).select('-senha');

      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' });
      }

      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha } = req.body;

      const dadosAtualizados = { nome, email };

      if (senha) {
        dadosAtualizados.senha = await bcrypt.hash(senha, 10);
      }

      const usuario = await Usuario.findByIdAndUpdate(
        id,
        dadosAtualizados,
        { new: true, runValidators: true }
      ).select('-senha');

      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' });
      }

      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async excluir(req, res) {
    try {
      const { id } = req.params;

      const usuario = await Usuario.findByIdAndDelete(id);

      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' });
      }

      return res.status(200).json({ mensagem: 'Usuário excluído com sucesso.' });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuario = await Usuario.findOne({ email });

      if (!usuario) {
        return res.status(401).json({ erro: 'Email ou senha inválidos.' });
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(401).json({ erro: 'Email ou senha inválidos.' });
      }

      const token = jwt.sign(
        { id: usuario._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
      );

      return res.status(200).json({
        usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email },
        token
      });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
};