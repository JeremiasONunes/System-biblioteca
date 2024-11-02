const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


// Rota para cadastrar um novo usuário
router.post('/usuarios', usuarioController.createUsuario);

// Rota para listar todos os usuários
router.get('/usuarios', usuarioController.getAllUsuarios);

// Rota para buscar um usuário específico por ID
router.get('/usuarios/:id', usuarioController.getUsuarioById);

module.exports = router;
