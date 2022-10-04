import { User } from '../infra/typeorm/entities/User';

interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  isAdmin?: boolean;
  driver_license: string;
  id?: string;
  avatar?: string;
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(user_id: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
