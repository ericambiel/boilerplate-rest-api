import { inject, singleton } from 'tsyringe';
import ConsoleLog from '@libs/ConsoleLog';
import express, { Express, Router } from 'express';
import api from '../config/api';
import cors from './middlewares/cors';
import success from './middlewares/success';
import notFound from './middlewares/not-found';
import error from './middlewares/error';

@singleton()
export default class ExpressServer {
  readonly server: Express;

  private readonly apiConfig = api();

  constructor(
    @inject('Router')
    readonly router: Router,
  ) {
    this.server = express();
    this.setup();
  }

  setup(): void {
    try {
      ConsoleLog.print(
        'Registering API...',
        'info',
        'API',
        this.apiConfig.SILENT_MODE,
      );

      this.middlewareBeforeRoutes();
      this.routes();
      this.middlewareAfterRoutes();

      ConsoleLog.print(
        'API has been registered.',
        'info',
        'API',
        this.apiConfig.SILENT_MODE,
      );
    } catch (err) {
      throw ConsoleLog.print(
        `An exception thrown during API registration: ${(<Error>err).message}`,
        'error',
        'API',
      );
    }
  }

  private middlewareBeforeRoutes(): void {
    ConsoleLog.print(
      'Starting Middlewares for routes...',
      'debug',
      'API',
      this.apiConfig.SILENT_MODE,
    );

    this.server.use(cors);
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    // Normalize response to response
    this.server.use(success);
  }

  private routes(): void {
    ConsoleLog.print(
      'Starting Routes...',
      'debug',
      'API',
      this.apiConfig.SILENT_MODE,
    );
    // Initiate routes and set base URL
    this.server.use(this.apiConfig.BASE_URL, this.router);

    if (this.apiConfig.DEBUG_LEVEL.includes('ROUTES')) {
      import('@helpers/route-printer.helper').then(fns => {
        fns.routePrinterHelper(this.apiConfig.BASE_URL, this.router);
      });
    }
  }

  private middlewareAfterRoutes(): void {
    ConsoleLog.print(
      'Starting remaining middleware...',
      'debug',
      'API',
      this.apiConfig.SILENT_MODE,
    );
    // Route not found Handler
    this.server.use(notFound);
    // error handler
    this.server.use(error);
  }
}
