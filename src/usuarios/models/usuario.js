const { DataTypes } = require('sequelize');
const sequelize = require('../../../models').sequelize;

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [11, 11],
      isNumeric: true
    }
  },
  nascimento: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Usuario;
