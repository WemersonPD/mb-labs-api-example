import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';

import 'reflect-metadata';
// import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import '@controllers/foo.controller';

export class App {
  private container: any;

  public server: InversifyExpressServer;

  constructor() {
    dotEnv.config({
      path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
    });

    this.container = new Container();

    this.configDependencies(this.container);
    this.configbuildServer(this.container);
  }

  configDependencies(container: any): void {
    // container.bind<Service>(TYPES.service).to(Service);
  }

  configbuildServer(container: any): void {
    this.server = new InversifyExpressServer(container, null, { rootPath: '/api/v1' });

    this.server.setConfig((app) => {
      app.use(express.json());
      app.use(cors());

    });
  }
}


export default new App().server.build();
