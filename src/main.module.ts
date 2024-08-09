import { Module } from '@nestjs/common';
import { GreetingsModule } from './greetings/greetings.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [GreetingsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
