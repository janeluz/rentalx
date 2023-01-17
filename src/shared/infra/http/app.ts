import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import { createConnection } from '@shared/infra/typeorm/data-source';
import '@shared/infra/typeorm/data-source';
import '@shared/container';
import swaggerDocument from '../../../../swagger.json';
import { AppError } from '@shared/errors/AppError';
import { router } from './routes';


createConnection();

const app = express();

app.use(express.json());
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router);

// Se o erro for uma instância do AppError geramos um erro customizado
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    // Se não, vamos retornar um Internal server error
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

export { app };