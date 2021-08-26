import { Dialect, Options } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
});

const connection: Options = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER as string,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB as string,
  dialect: 'postgres' as Dialect,
  define: {
    timestamps: true
  }
};

export default connection;
