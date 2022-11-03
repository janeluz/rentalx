import { UserTokens } from '@modules/accounts/infra/typeorm/entities/UsersToken';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../../../modules/accounts/infra/typeorm/entities/User';
import { Category } from '../../../modules/cars/infra/typeorm/entities/Category';
import { Specification } from '../../../modules/cars/infra/typeorm/entities/Specification';
import { CreateCategory1666650496096 } from './migrations/1666650496096-CreateCategory';
import { CreateSpecification1666653988999 } from './migrations/1666653988999-CreateSpecification';
import { CreateCar1666654264524 } from './migrations/1666654264524-CreateCar';
import { CreateUser1666655141471 } from './migrations/1666655141471-CreateUser';
import { AlterTableUser1666655785784 } from './migrations/1666655785784-AlterTableUser';


export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '121013',
  database: 'rentalx',
  synchronize: true,
  logging: true,
  entities: [Category, Specification, User,Car],
  // migrations: ['./src/shared/typeorm/migrations/*.ts']
  migrations: [
    CreateCategory1666650496096,
    CreateSpecification1666653988999,
    CreateUser1666655141471,
    // CreateUsersToken1666655169868,
    AlterTableUser1666655785784,
    CreateCar1666654264524,
    // CreateUsersToken1666232386456,
    // CreateRentals1666232441220,
    // CreateCarImagens1666232493655,
    // CreateSpecificationsCar1666232541466,
   
  ],
})
export function createConnection(host = "localhost"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

