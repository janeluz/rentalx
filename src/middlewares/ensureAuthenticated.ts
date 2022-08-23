import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}
/* interface IPayload criada porque na desestruturação do token o  sub não era reconhecido, fazemos isso para forçar */

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("token missing");
  }

  // [0] = Beaher
  // [1] = numero token

  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(
      token,
      "7a17c46b2a9256b6bad9b14b49d63f78"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }
    next();
  } catch {
    throw new Error("invalid token");
  }
}
