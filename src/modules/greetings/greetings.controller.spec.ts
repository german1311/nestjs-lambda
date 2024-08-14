import { Test, TestingModule } from '@nestjs/testing';
import { GreetingsController } from './greetings.controller';
import { HelloService } from './hello/hello.service';


describe('AppController', () => {
  let appController: GreetingsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GreetingsController],
      providers: [HelloService],
    }).compile();

    appController = app.get<GreetingsController>(GreetingsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
