import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { PowerToolsLoggerService } from 'src/common/PowerToolsLoggerService';
import * as express from 'express';

const binaryMimeTypes: string[] = [];

async function bootstrapServer(
  nestJsModule: any,
  cachedServer: Server | undefined,
): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(
      nestJsModule,
      new ExpressAdapter(expressApp),
    );
    nestApp.useGlobalPipes(new ValidationPipe());
    nestApp.use(eventContext());
    nestApp.useLogger(new PowerToolsLoggerService(nestJsModule.name));

    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

export default bootstrapServer;
