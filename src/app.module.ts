import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HelloService } from './greetings/hello/hello.service';
import { GoodByeService } from './greetings/goodbye/goodbye.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [HelloService, GoodByeService],
})
export class AppModule {}
