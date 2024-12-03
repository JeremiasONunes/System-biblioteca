const { DataTypes } = require('sequelize');
const sequelize = require('../../usuarios/models').sequelize;

const Emprestimo = sequelize.define('Emprestimo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuarios',  // Defina a referência correta para a tabela 'Usuarios'
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  livroId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Livros',  // Defina a referência correta para a tabela 'Livros'
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  dataEmprestimo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataDevolucao: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'Emprestimos', // Nome da tabela no banco de dados
  timestamps: true,         // Para suportar os campos createdAt e updatedAt
});

module.exports = Emprestimo;
