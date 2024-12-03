const emprestimoService = require('../../emprestimos/services/emprestimoService');
const livroService = require('../../livros/services/livroService'); // Certifique-se de que o caminho está correto

exports.createEmprestimo = async (req, res) => {
  try {
    const { livroId, usuarioId } = req.body;

    // Verificar se o livro está disponível
    const livro = await livroService.getById(livroId);
    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    if (livro.disponibilidade===false) {
      return res.status(400).json({ error: 'Livro não está disponível para empréstimo' });
    }

    // Verificar se o usuário é válido (adicionando uma validação, por exemplo)
    //const usuario = await usuarioService.getById(usuarioId);
    //if (!usuario) {
    //  return res.status(404).json({ error: 'Usuário não encontrado' });
     //}

    // Criar o empréstimo
    const emprestimo = await emprestimoService.create({
      livroId,
      usuarioId,
      dataEmprestimo: new Date(), // Você pode adicionar a data de empréstimo ou outros campos conforme necessário
      status: 'Em andamento', // Exemplo de status, se necessário
    });

    // Atualizar a disponibilidade do livro
    
    await livroService.updateDisponibilidade(livroId, false);;

    res.status(201).json(emprestimo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar empréstimo' });
  }
};

exports.getAllEmprestimos = async (req, res) => {
  try {
    const emprestimos = await emprestimoService.getAll();
    res.status(200).json(emprestimos);
  } catch (error) {
    console.error('Erro ao listar empréstimos:', error);
    res.status(500).json({ error: 'Erro ao listar empréstimos' });
  }
};

exports.getEmprestimoById = async (req, res) => {
  try {
    const emprestimo = await emprestimoService.getById(req.params.id);
    if (!emprestimo) {
      return res.status(404).json({ error: 'Empréstimo não encontrado' });
    }
    res.status(200).json(emprestimo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar empréstimo' });
  }
};

exports.updateEmprestimo = async (req, res) => {
  try {
    const { id } = req.params; // ID do empréstimo
    const dadosAtualizados = req.body; // Dados para atualizar o empréstimo

    // Busca o empréstimo pelo ID
    const emprestimo = await emprestimoService.getById(id);
    if (!emprestimo) {
      return res.status(404).json({ error: 'Empréstimo não encontrado' });
    }

    // Atualiza os dados do empréstimo (caso necessário)
    await emprestimoService.update(id, dadosAtualizados);

    // Pega o livroId do empréstimo para atualizar a disponibilidade do livro
    const { livroId } = emprestimo;  // Aqui você pega o livroId do empréstimo recuperado

    // Atualiza a disponibilidade do livro para "disponível"
    await livroService.updateDisponibilidade(livroId, true);  // Atualiza o livro com ID de "livroId"

    res.status(200).json({ message: 'Empréstimo e disponibilidade do livro atualizados com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar empréstimo' });
  }
};

