import { Module, Logger } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { DataStoreService } from './data-store/data-store.service';
import { DataStoreModule } from './data-store/data-store.module';

@Module({
  imports: [
    ProductsModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
    }),
    DataStoreModule,
  ],
  providers: [AppService, DataStoreService],
})
export class AppModule {}
