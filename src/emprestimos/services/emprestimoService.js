const Emprestimo = require('../../emprestimos/models/emprestimo');  // Certifique-se de que o caminho está correto

// Método para obter todos os empréstimos
exports.getAll = async () => {
  try {
    const emprestimos = await Emprestimo.findAll(); // Utilizando o modelo para buscar todos os registros
    return emprestimos;
  } catch (error) {
    console.error(error); // Log para facilitar a depuração
    throw new Error('Erro ao buscar todos os empréstimos');
  }
};

// Método para obter um empréstimo específico pelo ID
exports.getById = async (id) => {
  try {
    const emprestimo = await Emprestimo.findByPk(id);  // Busca um empréstimo por ID
    if (!emprestimo) {
      throw new Error(`Empréstimo com ID ${id} não encontrado`); // Erro mais informativo
    }
    return emprestimo;
  } catch (error) {
    console.error(error); // Log para facilitar a depuração
    throw new Error('Erro ao buscar empréstimo');
  }
};

// Método para criar um empréstimo
exports.create = async (dados) => {
  try {
    const emprestimo = await Emprestimo.create(dados);  // Criação de um novo empréstimo
    return emprestimo;
  } catch (error) {
    console.error(error); // Log para facilitar a depuração
    throw new Error('Erro ao criar empréstimo');
  }
};

// Método para atualizar um empréstimo
exports.update = async (id, dados) => {
  try {
    const emprestimo = await Emprestimo.findByPk(id);
    if (!emprestimo) {
      throw new Error(`Empréstimo com ID ${id} não encontrado`); // Erro mais informativo
    }
    await emprestimo.update(dados);  // Atualizando os dados do empréstimo
    return emprestimo;
  } catch (error) {
    console.error(error); // Log para facilitar a depuração
    throw new Error('Erro ao atualizar empréstimo');
  }
};
