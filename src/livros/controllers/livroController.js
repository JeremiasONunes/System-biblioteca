const livroService = require('../services/livroService');

exports.createLivro = async (req, res) => {
    try {
        const livro = await livroService.create(req.body);
        res.status(201).json(livro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar livro' });
    }
};

exports.getAllLivros = async (req, res) => {
    try {
        const livros = await livroService.getAll();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar livros' });
    }
};

exports.getLivroById = async (req, res) => {
    try {
        const livro = await livroService.getById(req.params.id);
        if (!livro) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }
        res.status(200).json(livro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livro' });
    }
};

exports.updateDisponibilidade = async (req, res) => {
    try {
        const livro = await livroService.updateDisponibilidade(req.params.id, req.body.disponibilidade);
        if (!livro) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }
        res.status(200).json(livro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar disponibilidade do livro' });
    }
};
