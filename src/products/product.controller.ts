import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Products } from './product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    getAllProducts(): Products[] {
        return this.productService.findAll();
    }
}
