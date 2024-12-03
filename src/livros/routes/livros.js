const express = require('express');
const livroController = require('../controllers/livroController');
const router = express.Router();

router.post('/livro/', livroController.createLivro);
router.get('/livro/', livroController.getAllLivros);
router.get('/livro/:id', livroController.getLivroById);
router.patch('/livro/:id', livroController.updateDisponibilidade);

module.exports = router;
