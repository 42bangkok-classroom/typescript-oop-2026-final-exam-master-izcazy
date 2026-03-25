import { Controller, Get } from '@nestjs/common';
import { PurchasesService } from './purchase.service';
import { Purchases } from './purchase.interface';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get()
  getAllProducts(): Purchases[] {
    return this.purchasesService.findAll();
  }
}
