import { Model, Optional, Sequelize, DataTypes } from 'sequelize';

// import config from '../config/database.config';

// const sequelize = new Sequelize(config);

// interface UserAttributes {
//   id: number;
//   name: string;
//   businessName: string;
//   category: string;
//   email: string;
//   status: boolean;
//   createdAt: Date;
//   updatedAt: Date
// }

import { UserDto } from '../dtos/UserDto';

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface UserCreationAttributes extends Optional<UserDto, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance
  extends Model<UserDto, UserCreationAttributes>,
    UserDto {}

export default (sequelize: Sequelize) => {
  const UserModel = sequelize.define<UserInstance>('User', {
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
  },
  {
    tableName: 'User'
  });

  return UserModel;
};
