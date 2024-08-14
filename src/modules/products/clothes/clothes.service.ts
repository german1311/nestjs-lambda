import { Injectable } from '@nestjs/common';

@Injectable()
export class ClothesService {
  get(): string {
    return 'This is a nice clothes service!';
  }
}
