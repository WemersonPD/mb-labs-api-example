'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      businessName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      category: {
        type: Sequelize.ENUM(
          'Salão de Festas e Eventos',
          'Comidas e Bebidas (Buffet)',
          'Decoração',
          'Bolos e Doces',
          'Brinquedos e Animação',
          'Fotografia e Filmagem',
          'Música e Iluminação',
          'Lembranças',
          'Beleza e Vestuário',
          'Diversos'
        ),
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },

      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Users');
  }
};
