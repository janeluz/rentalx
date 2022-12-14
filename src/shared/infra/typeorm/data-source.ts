import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { CreateCategory1666650496096 } from '@shared/infra/typeorm/migrations/1666650496096-CreateCategory';
import { CreateSpecification1666653988999 } from '@shared/infra/typeorm/migrations/1666653988999-CreateSpecification';
import { CreateCar1666654264524 } from '@shared/infra/typeorm/migrations/1666654264524-CreateCar';
import { CreateUser1666655141471 } from '@shared/infra/typeorm/migrations/1666655141471-CreateUser';
import { AlterTableUser1666655785784 } from '@shared/infra/typeorm/migrations/1666655785784-AlterTableUser';

import { CreateRentals1666232441220 } from './migrations/1666232441220-CreateRentals';



export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.NODE_ENV,
  port: 5432,
  username: 'postgres',
  password: '121013',
  database: process.env.NODE_ENV === "test" ? "rentalx_test" : "rentalx",
  synchronize: true,
  logging: true,
  entities: ["src/modules/**/infra/typeorm/entities/*.ts"],
  migrations: ["src/shared/infra/typeorm/migrations/*.ts"],
  // entities: [Category, Specification, User],

  // migrations: [
  //   CreateRentals1666232441220,
  //   CreateCategory1666650496096,
  //   CreateSpecification1666653988999,
  //   CreateUser1666655141471,
  //   // // CreateUsersToken1666655169868,
  //   AlterTableUser1666655785784,
  //   CreateCar1666654264524,
  //   // // CreateUsersToken1666232386456,
  //   // // CreateRentals1666232441220,
  //   // // CreateCarImagens1666232493655,
  //   // // CreateSpecificationsCar1666232541466,
  // ],
});

// export function createConnection(host = 'database'): Promise<DataSource> {
 
//   return AppDataSource.setOptions( {host}).initialize();

  
// }

// export default AppDataSource;



// import "reflect-metadata"
// import { DataSource } from "typeorm"

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: process.env.NODE_ENV === "test" ? 5432:5432,
//   username: "postgres",
//   password: "121013",
//   database: process.env.NODE_ENV === "test" ? "rentalx_test" : "rentalx",
//   synchronize: false,
//   logging: false,
//   entities: ["src/modules/**/infra/typeorm/entities/*.ts"],
//   migrations: ["src/shared/infra/typeorm/migrations/*.ts"],
//   subscribers: [],
// })

export function createConnection(
  host = process.env.NODE_ENV === "test" ? "localhost" : "database"
): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize()
}

 export default AppDataSource;