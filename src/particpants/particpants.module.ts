import { Module } from '@nestjs/common';
import { ParticpantsResolver } from './particpants.resolver';
import { ParticpantsService } from './particpants.service';
import { ProductsModule } from '../products/products.module'

@Module({
  imports: [ ProductsModule ],
  providers: [ParticpantsResolver, ParticpantsService],
})
export class ParticpantsModule {}
