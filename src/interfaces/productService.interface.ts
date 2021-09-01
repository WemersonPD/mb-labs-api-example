import { ProductDto } from '@dtos/product.dto';

export interface ProductServiceInterface {
    index(): Promise<ProductDto[]>;
    getOne(id: string): Promise<ProductDto>;
    create(product: ProductDto): Promise<ProductDto[]>;
    update(id: string, product: ProductDto): Promise<ProductDto[]>;
    delete(name: string): Promise<ProductDto[]>;
}
