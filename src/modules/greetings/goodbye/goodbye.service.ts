import { Injectable } from '@nestjs/common';

@Injectable()
export class GoodByeService {
  getByeBye(id:string): string {
    return `Goodbye ${id}!`;
  }
}
