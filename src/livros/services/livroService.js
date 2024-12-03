const { Livro } = require('../models');

exports.create = async (dadosLivro) => {
    return await Livro.create(dadosLivro);
};

exports.getAll = async () => {
    return await Livro.findAll();
};

exports.getById = async (id) => {
    return await Livro.findByPk(id);
};

exports.updateDisponibilidade = async (id, disponibilidade) => {
    const livro = await Livro.findByPk(id);
    if (!livro) return null;
    livro.disponibilidade = disponibilidade;
    await livro.save();
    return livro;
};
