const express = require('express');
const usuarioRoutes = require('../src/usuarios/routes/usuarios');
const livroRoutes = require('./livros/routes/livros');
const emprestimosRoutes = require('./emprestimos/routes/emprestimos');

const app = express();
app.use(express.json());

// Registra as rotas de usuários
app.use('/', usuarioRoutes);

// Registra as rotas de livros
app.use('/', livroRoutes);

// Registra as rotas de empréstimos
app.use('/', emprestimosRoutes);


// Inicializa o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
