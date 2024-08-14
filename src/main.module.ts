import { Module } from '@nestjs/common';
import { GreetingsModule } from './modules/greetings/greetings.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [GreetingsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
