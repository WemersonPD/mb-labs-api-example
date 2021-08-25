require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
});

module.exports = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  dialect: process.env.DATABASE_DIALECT || 'postgres',
  define: {
    timestamps: true
  }
};
