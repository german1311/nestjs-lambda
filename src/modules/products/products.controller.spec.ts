import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ClothesService } from './clothes/clothes.service';


describe('AppController', () => {
  let appController: ProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ClothesService],
    }).compile();

    appController = app.get<ProductsController>(ProductsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.get()).toBe('Hello World!');
    });
  });
});
