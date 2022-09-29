import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, isAdmin, password, driver_license } =
      request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.excute({
      name,
      email,
      isAdmin,
      password,
      driver_license,
    });

    return response.status(201).send();
  }
}
export { CreateUserController };
