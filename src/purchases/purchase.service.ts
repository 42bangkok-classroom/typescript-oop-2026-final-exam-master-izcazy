import { Injectable } from '@nestjs/common';
import { Purchases } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PurchasesService {
  findAll(): Purchases[] {
    const filepath = path.join(process.cwd(), 'data', 'purchases.json');
    const fileData = fs.readFileSync(filepath, 'utf-8');
    const purchase: Purchases[] = JSON.parse(fileData) as Purchases[];
    return purchase;
  }
}
