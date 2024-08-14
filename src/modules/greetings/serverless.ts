import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { proxy } from 'aws-serverless-express';
import { GreetingsModule } from './greetings.module';
import bootstrapServer from 'src/common/bootstrapServer';

let cachedServer: Server;

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer(GreetingsModule, cachedServer);
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
