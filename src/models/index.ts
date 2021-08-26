import { Options, Sequelize } from 'sequelize';

import config from '../config/database.config';
import User from './User';

// const dbName = process.env.DATABASE_DB as string;
// const dbUser = process.env.DATABASE_USER as string;
// const dbHost = process.env.DATABASE_HOST;
// const dbPassword = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(config as Options);

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

export default {
  User: User(sequelize)
};
