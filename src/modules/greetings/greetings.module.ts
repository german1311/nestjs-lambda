import { Module } from '@nestjs/common';
import { GreetingsController } from './greetings.controller';
import { GoodByeService } from './goodbye/goodbye.service';
import { HelloService } from './hello/hello.service';


@Module({
  imports: [],
  controllers: [GreetingsController],
  providers: [HelloService, GoodByeService],
})
export class GreetingsModule {}
