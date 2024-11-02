const usuarioService = require('../services/usuarioService');

// Criação de novos usuários
exports.createUsuario = async (req, res) => {
  try {
    const usuario = await usuarioService.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error); 
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
}

// Listagem de todos os usuários
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.getAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

// Consulta de um usuário específico por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await usuarioService.getById(req.params.id);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};
