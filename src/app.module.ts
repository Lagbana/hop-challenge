import { Module, Logger } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UtilsModule } from './utils/utils.module';
import { ParticpantsModule } from './particpants/particpants.module';

@Module({
  imports: [
    ProductsModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
    }),
    UtilsModule,
    ParticpantsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
