import { injectable } from 'inversify';

import { ProductServiceInterface } from '@interfaces/productService.interface';
import { ProductDto } from '@dtos/product.dto';

@injectable()
export class ProductService implements ProductServiceInterface {
    private products: ProductDto[] = [
      {
        id: '1',
        name: 'Prod 1',
        value: 10
      },
      {
        id: '2',
        name: 'Prod 2',
        value: 15
      }
    ]

    async index(): Promise<ProductDto[]> {
      return this.products;
    }

    async getOne(id: string): Promise<ProductDto> {
      const currentProduct = this.products.find((product) => product.id === id);

      if (!currentProduct) {
        throw new Error('Product not found');
      }

      return currentProduct;
    }

    async create(product: ProductDto): Promise<ProductDto[]> {
      this.products.push(product);
      return this.products;
    }

    async update(id: string, product: ProductDto): Promise<ProductDto[]> {
      const currentProduct = this.products.find((product) => product.id === id);

      if (!currentProduct) {
        throw new Error('Product not found');
      }

      const { name, value } = product;
      if (name) {
        this.products.map((product) => {
          if (product.id === id) {
            product.name = name;
          }
          return product;
        });
      }

      if (value) {
        this.products.map((product) => {
          if (product.id === id) {
            product.value = value;
          }
          return product;
        });
      }

      return this.products;
    }

    async delete(name: string): Promise<ProductDto[]> {
      const productIndex = this.products.findIndex((product) => product.name === name);

      if (productIndex === -1) {
        throw new Error('Product not found');
      }

      this.products.splice(productIndex, 1);

      return this.products;
    }
}
