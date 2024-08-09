import { Injectable } from '@nestjs/common';

@Injectable()
export class ElectroService {
  getElectronics(): string {
    return 'This is an iPAD service!';
  }
}
