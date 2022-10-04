import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../../../modules/accounts/infra/typeorm/entities/User';
import { Category } from '../../../modules/cars/infra/typeorm/entities/Category';
import { Specification } from '../../../modules/cars/infra/typeorm/entities/Specification';

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
  migrations: ['./src/database/migrations/*.ts'],
});

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });
