import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(name?: string): string {
    if(name) {
      return `Hello ${name}!`;
    }
    
    return 'Hello World!';
  }
}
