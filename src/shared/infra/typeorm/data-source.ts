import { DataSource } from "typeorm/data-source/DataSource";



export const AppDataSource = new DataSource({
    type:'postgres',
    host:process.env.NODE_ENV,
    port: 5432,
    username:'postgres',
    password:'121013',
    database: process.env.NODE_ENV ==='test'? 'rentalx_test' : 'rentalx',
    synchronize: true,
    logging: true,
    entities:['./src/modules/**/infra/typeorm/entities/*.ts'],
    migrations:['src/shared/infra/typeorm/migrations/*.ts'],

    });

    // export function createConnection(
    //     host = process.env.NODE_ENV ==='test'? 'localhost':'database'):Promise<DataSource> {
    //         return AppDataSource.setOptions({host}).initialize()
    //     }
