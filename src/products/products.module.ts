import { Module, HttpModule } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { UtilsModule } from '../utils/utils.module';

@Module({
  exports: [ProductsService],
  imports: [HttpModule, UtilsModule],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
