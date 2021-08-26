'use strict';

import { QueryInterface, DataTypes } from 'sequelize';

export async function up (queryInterface: QueryInterface) {
  await queryInterface.createTable('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    businessName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    category: {
      type: DataTypes.ENUM(
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
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },

    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  });
}

export async function down (queryInterface: QueryInterface) {
  await queryInterface.dropTable('User');
}
