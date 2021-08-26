import express, { Application } from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';

import routes from './routes';

class App {
  public express: Application;

  constructor () {
    this.express = express();

    dotEnv.config({
      path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
    });

    this.middlewares();
    this.routes();
  }

  private middlewares (): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes (): void {
    this.express.use(routes);
  }
}

export default new App().express;
