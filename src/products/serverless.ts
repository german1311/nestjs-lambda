import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { proxy } from 'aws-serverless-express';
import bootstrapServer from 'src/common/bootstrapServer';
import { ProductsModule } from './products.module';

let cachedServer: Server;

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer(ProductsModule, cachedServer);
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
