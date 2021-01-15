import { Module, HttpModule } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { UtilsModule } from '../utils/utils.module'

@Module({
  imports: [HttpModule, UtilsModule],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
