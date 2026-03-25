import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    getAllProducts(): Products[] {
        return this.productService.findAll();
    }
}
