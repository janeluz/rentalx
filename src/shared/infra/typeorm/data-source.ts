import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../../../modules/accounts/infra/typeorm/entities/User';
import { Category } from '../../../modules/cars/infra/typeorm/entities/Category';
import { Specification } from '../../../modules/cars/infra/typeorm/entities/Specification';
import { AlterUserAddAvatar1616202763102 } from './migrations/1616202763102-AlterUserAddAvatar';
import { CreateCars1616767002011 } from './migrations/1616767002011-CreateCars';
import { CreateSpecificationsCars1616804636016 } from './migrations/1616804636016-CreateSpecificationsCars';
import { CreateCarImages1616813621403 } from './migrations/1616813621403-CreateCarImages';
import { CreateRentals1616846425130 } from './migrations/1616846425130-CreateRentals';
import { CreateUsersToken1617285235292 } from './migrations/1617285235292-CreateUsersToken';
import { CreteUsers1664309265418 } from './migrations/1664309265418-users';
import { CreateCategories } from './migrations/CreateCategories';
import { CreateSpecification } from './migrations/CreateSpecification';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'postgres',
  password: '121013',
  database: 'rentalx',
  synchronize: true,
  logging: true,
  entities: [Category, Specification, User],
  migrations: [
    CreateCategories,
    CreateSpecification,
    CreteUsers1664309265418,
    AlterUserAddAvatar1616202763102,
    CreateCars1616767002011,
    CreateSpecificationsCars1616804636016,
    CreateCarImages1616813621403,
    CreateRentals1616846425130,
    CreateUsersToken1617285235292,
  ],
});
 
export function createConnection(host = "database"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

