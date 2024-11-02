const express = require('express');
const usuarioRoutes = require('../src/usuarios/routes/usuarios');

const app = express();
app.use(express.json());

// Registra as rotas de usuários
app.use('/', usuarioRoutes);

// Inicializa o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
