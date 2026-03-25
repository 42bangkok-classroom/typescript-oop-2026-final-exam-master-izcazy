import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Products<T> } from './product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAllProducts(): Products<T>[] {
    return this.productService.findAll();
  }
}
