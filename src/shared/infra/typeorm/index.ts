import { UserTokens } from '@modules/accounts/infra/typeorm/entities/UsersToken';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../../../modules/accounts/infra/typeorm/entities/User';
import { Category } from '../../../modules/cars/infra/typeorm/entities/Category';
import { Specification } from '../../../modules/cars/infra/typeorm/entities/Specification';
import { CreateSpecification1666232161094 } from './migrations/1666232161094-CreateSpecification';
import { CreateCategories1666232199091 } from './migrations/1666232199091-CreateCategories';
import { CreateUsers1666232274729 } from './migrations/1666232274729-CreateUsers';
import { CreateUsersToken1666232386456 } from './migrations/1666232386456-CreateUsersToken';
import { CreateRentals1666232441220 } from './migrations/1666232441220-CreateRentals';
import { CreateCarImagens1666232493655 } from './migrations/1666232493655-CreateCarImagens';
import { CreateSpecificationsCar1666232541466 } from './migrations/1666232541466-CreateSpecificationsCar';
import { CreateCars1666232601509 } from './migrations/1666232601509-CreateCars';


export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '121013',
  database: 'rentalx',
  synchronize: true,
  logging: true,
  entities: [Category, Specification, User,Car,UserTokens],
  // migrations: ['./src/shared/typeorm/migrations/*.ts']
  migrations: [
    CreateCategories1666232199091,
    CreateSpecification1666232161094,
    CreateUsers1666232274729,
    // CreateUsersToken1666232386456,
    // CreateRentals1666232441220,
    // CreateCarImagens1666232493655,
    // CreateSpecificationsCar1666232541466,
    CreateCars1666232601509
  ],
});
 
export function createConnection(host = "localhost"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

