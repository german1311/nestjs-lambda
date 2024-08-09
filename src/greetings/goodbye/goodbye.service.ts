import { Injectable } from '@nestjs/common';

@Injectable()
export class GoodByeService {
  getByeBye(): string {
    return 'Bye bye!';
  }
}
