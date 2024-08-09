import { Controller, Get } from '@nestjs/common';
import { HelloService } from './greetings/hello/hello.service';
import { GoodByeService } from './greetings/goodbye/goodbye.service';

@Controller()
export class AppController {
  constructor(
    private readonly helloService: HelloService,
    private readonly goodbyeService: GoodByeService,
  ) {}

  @Get(["", "hello"])
  getHello(): string {
    return this.helloService.getHello();
  }

  @Get("goodbye")
  getGoodBye(): string {
    return this.goodbyeService.getByeBye();
  }
}
