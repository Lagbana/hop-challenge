import { Resolver, Query } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Resolver()
export class ProductsResolver {
  products: Product[];

  constructor(private readonly productService: ProductsService) {}

  /**
   * Returns all array of all products
   * @endPoint {getAllProducts}
   * @returns Promise<<Product[]>>
   */
  @Query(() => [Product])
  async getAllProducts(): Promise<Product[]> {
    const { error, data } = await this.productService.getAllProducts();
    error.length === 0 ? (this.products = data) : null;

    return this.products;
  }

  /**
   * Returns all array of purchased products
   * @endPoint {getPurchasedProducts}
   * @returns Promise<<Product[]>>
   */
  @Query(() => [Product])
  async getPurchasedProducts(): Promise<Product[]> {
    const purchasedProducts = await this.productService.getPurchasedProducts();
    return purchasedProducts;
  }
}
