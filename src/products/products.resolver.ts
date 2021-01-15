import { Resolver, Query } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  public products: Product[];

  @Query(() => [Product])
  async getProducts() {
    const { error, data } = await this.productService.getProducts();
    this.products = data;
    console.log(this.products[0]);
    return this.products;
  }
}
