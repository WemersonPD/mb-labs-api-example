import { Options, Sequelize } from 'sequelize';

import config from '../config/database.config';

const sequelize = new Sequelize(config as Options);

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

export default {
};
