import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ConfigService {
  static get(key: string): string {
    return process.env[key];
  }
}