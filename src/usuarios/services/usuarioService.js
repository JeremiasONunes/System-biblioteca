const { Usuario } = require('../models');
// Criação de um novo usuário
exports.create = async (dadosUsuario) => {
  try {
    return await Usuario.create(dadosUsuario);
  } catch (error) {
    console.error('Erro no serviço de criação de usuário:', error); // Para depuração
    throw error; // Isso garante que o erro seja passado para o controlador
  }
};

// Consulta de todos os usuários
exports.getAll = async () => {
  return await Usuario.findAll();
};

// Consulta por ID específico
exports.getById = async (id) => {
  return await Usuario.findByPk(id);
};

