import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';
import morgan from 'morgan';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import TYPES from './types';

// Controllers
import '@controllers/product.controller';

// Services
import { ProductService } from '@services/products.service';

// Interfaces
import { ProductServiceInterface } from '@interfaces/productService.interface';

export class App {
  private container: Container;

  public server: InversifyExpressServer;

  constructor() {
    dotEnv.config({
      path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
    });

    this.container = new Container();

    this.container.bind<ProductServiceInterface>(TYPES.ProductServiceInterface).to(ProductService);
    // this.configDependencies();
    this.configbuildServer(this.container);
  }

  // configDependencies(): void {
  //   ;
  // }

  configbuildServer(container: any): void {
    this.server = new InversifyExpressServer(container, null, { rootPath: '/api/v1' });

    this.server.setConfig((app) => {
      app.use(express.json());
      app.use(cors());
      app.use(morgan('dev'));
    });
  }
}

export default new App().server.build();
