import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from "jsonwebtoken";
import auth from '@config/auth';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';



interface IPayload {
  sub: string;
}
/* interface IPayload criada porque na desestruturação do token o  sub não era reconhecido, fazemos isso para forçar */

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('token missing', 401);
  }

  // [0] = Beaher
  // [1] = numero token

  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(
      token,
      auth.secret_token,
    ) as IPayload;

   request.user = {
      id: user_id,
    };

   next();
  } catch (error) {
    throw new AppError('invalid token', 401);
  }
}
