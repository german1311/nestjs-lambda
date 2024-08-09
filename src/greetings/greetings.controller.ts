import { Body, Controller, Get, Logger, Param, Post, Query } from '@nestjs/common';
import { HelloService } from './hello/hello.service';
import { GoodByeService } from './goodbye/goodbye.service';

@Controller('greetings')
export class GreetingsController {
  constructor(
    private readonly helloService: HelloService,
    private readonly goodbyeService: GoodByeService,
  ) {}

  @Get(['', 'hello'])
  getHello(@Query('name') name: string): string {
    Logger.log(`Name: ${name}`);
    return this.helloService.getHello(name);
  }

  @Get('goodbye/:id')
  getGoodBye(@Param('id') id: string): string {
    return this.goodbyeService.getByeBye(id);
  }

  @Post("custom")
  customGreeting(@Body() body: { greeting: string, name: string }): string {
    const { greeting, name } = body;
    return `${greeting}, ${name}!`;
  }
}
