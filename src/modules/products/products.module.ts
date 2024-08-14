import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ElectroService } from './electro/electro.service';
import { ClothesService } from './clothes/clothes.service';


@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ClothesService, ElectroService],
})
export class ProductsModule {}
