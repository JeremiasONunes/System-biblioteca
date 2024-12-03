const express = require('express');
const router = express.Router();
const emprestimoController = require('../../emprestimos/controllers/emprestimoController');

// Rota para criar um novo empréstimo
router.post('/emprestimo', emprestimoController.createEmprestimo);

// Rota para listar todos os empréstimos
router.get('/emprestimo', emprestimoController.getAllEmprestimos);

// Rota para buscar um empréstimo por ID
router.get('/emprestimo/:id', emprestimoController.getEmprestimoById);

// Rota para atualizar um empréstimo
router.put('/emprestimo/:id', emprestimoController.updateEmprestimo);



module.exports = router;
