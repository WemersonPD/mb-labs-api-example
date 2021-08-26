require('dotenv').config({
  path: '.env.development'
});

const databaseCredentials = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT || 'postgres',
  define: {
    timestemps: false
  }
};

if (process.env.DATABASE_SSL === 'true') {
  databaseCredentials.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  };
}

module.exports = databaseCredentials;
