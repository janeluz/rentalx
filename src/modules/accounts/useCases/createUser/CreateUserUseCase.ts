import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import {
  ICreateUserDTO,
  IUsersRepository,
} from '@modules/accounts/repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async excute({
    name,
    email,
    isAdmin,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User Already exists');
    }
    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({
      name,
      email,
      isAdmin,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
