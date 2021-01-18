import { Resolver, Query } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Resolver()
export class ProductsResolver {
  #products: Product[];

  constructor(private readonly productService: ProductsService) {}

  // Todo: ADD JSDOC COMMENTS
  @Query(() => [Product])
  async getAllProducts(): Promise<Product[]> {
    const { error, data } = await this.productService.getAllProducts();
    error.length === 0 ? (this.#products = data) : null;

    return this.#products;
  }

  // Todo: ADD JSDOC COMMENTS
  @Query(() => [Product])
  async getPurchasedProducts(): Promise<Product[]> {
    const purchasedProducts = await this.productService.getPurchasedProducts();
    return purchasedProducts;
  }
}
