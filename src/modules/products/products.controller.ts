import { Controller, Get } from '@nestjs/common';
import { ClothesService } from './clothes/clothes.service';
import { ElectroService } from './electro/electro.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly clothesService: ClothesService,
    private readonly electroService: ElectroService,
  ) {}

  @Get(["", "clothes"])
  get(): string {
    return this.clothesService.get();
  }

  @Get("electro")
  getElectro(): string {
    return this.electroService.getElectronics();
  }
}
