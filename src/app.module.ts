import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiExceptionFilter } from './common/api-exception.filter';
import { ProductsService } from './products/product.service';
import { ProductsController } from './products/product.controller';
import { ProductsModule } from './products/product.module';
import { PurchasesService } from './purchases/purchase.service';
import { PurchasesController } from './purchases/purchase.controller';
import { PurchasesModule } from './purchases/purchase.module';

@Module({
  imports: [ProductsModule, PurchasesModule],
  controllers: [AppController, ProductsController, PurchasesController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ApiExceptionFilter,
    },
    ProductsService,
    PurchasesService,
  ],
})
export class AppModule {}
