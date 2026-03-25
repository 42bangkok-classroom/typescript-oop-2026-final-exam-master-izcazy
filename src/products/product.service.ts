import { Injectable } from '@nestjs/common';
import { Products } from './product.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductsService {
  findAll(): Products[] {
    const filepath = path.join(process.cwd(), 'data', 'products.json');
    const fileData = fs.readFileSync(filepath, 'utf-8');
    const products: Products[] = JSON.parse(fileData) as Products[];

    return products;
  }
}
