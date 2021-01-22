import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UtilsModule } from './utils/utils.module';
import { ParticpantsModule } from './particpants/particpants.module';

@Module({
  imports: [
    ProductsModule,
    UtilsModule,
    ParticpantsModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/build'),
      exclude: ["/graphql"]

    }),
  ],
  providers: [AppService],
})
export class AppModule {}
