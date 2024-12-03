const { DataTypes } = require('sequelize');
const sequelize = require('../../../models').sequelize;

const Livro = sequelize.define('Livro', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    disponibilidade: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Livro;
