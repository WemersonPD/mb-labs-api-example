
import express from 'express';
import { inject } from 'inversify';
import { controller, httpDelete, httpGet, httpPatch, httpPost, interfaces, request, requestBody, requestParam, response } from 'inversify-express-utils';

import TYPES from '../types';
import { ProductDto } from '@dtos/product.dto';
import { ProductService } from '@services/products.service';

@controller('/products')
export class ProductController implements interfaces.Controller {
  constructor(
    @inject(TYPES.ProductServiceInterface) private productService: ProductService
  ) {}

  @httpGet('/')
  private async index(@request() req: express.Request, @response() res: express.Response) {
    try {
      const products = await this.productService.index();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @httpGet('/:id')
  private async getOne(@requestParam('id') id: string, @response() res: express.Response) {
    try {
      const product = await this.productService.getOne(id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @httpPost('/')
  private async create(@requestBody() body: ProductDto, @response() res: express.Response) {
    try {
      const products = await this.productService.create(body);
      return res.status(201).json(products);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @httpPatch('/:id')
  private async update(@requestParam('id') id: string, @requestBody() body: ProductDto, @response() res: express.Response) {
    try {
      const products = await this.productService.update(id, body);
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @httpDelete('/:name')
  private async delete(@requestParam('name') name: string, @response() res: express.Response) {
    try {
      const products = await this.productService.delete(name);
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
