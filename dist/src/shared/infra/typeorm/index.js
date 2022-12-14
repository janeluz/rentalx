"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = exports.AppDataSource = void 0;
require("reflect-metadata");
var Car_1 = require("@modules/cars/infra/typeorm/entities/Car");
var User_1 = require("@modules/accounts/infra/typeorm/entities/User");
var Category_1 = require("@modules/cars/infra/typeorm/entities/Category");
var Specification_1 = require("@modules/cars/infra/typeorm/entities/Specification");
var _1666650496096_CreateCategory_1 = require("@shared/infra/typeorm/migrations/1666650496096-CreateCategory");
var _1666653988999_CreateSpecification_1 = require("@shared/infra/typeorm/migrations/1666653988999-CreateSpecification");
var _1666654264524_CreateCar_1 = require("@shared/infra/typeorm/migrations/1666654264524-CreateCar");
var _1666655141471_CreateUser_1 = require("@shared/infra/typeorm/migrations/1666655141471-CreateUser");
var _1666655785784_AlterTableUser_1 = require("@shared/infra/typeorm/migrations/1666655785784-AlterTableUser");
var _1666232441220_CreateRentals_1 = require("./migrations/1666232441220-CreateRentals");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.NODE_ENV,
    port: 5432,
    username: 'postgres',
    password: '121013',
    database: process.env.NODE_ENV === "test" ? "rentalx_test" : "rentalx",
    synchronize: false,
    logging: true,
    entities: [Category_1.Category, Specification_1.Specification, User_1.User, Car_1.Car],
    migrations: [
        _1666232441220_CreateRentals_1.CreateRentals1666232441220,
        _1666650496096_CreateCategory_1.CreateCategory1666650496096,
        _1666653988999_CreateSpecification_1.CreateSpecification1666653988999,
        _1666655141471_CreateUser_1.CreateUser1666655141471,
        // // CreateUsersToken1666655169868,
        _1666655785784_AlterTableUser_1.AlterTableUser1666655785784,
        _1666654264524_CreateCar_1.CreateCar1666654264524,
        // // CreateUsersToken1666232386456,
        // // CreateRentals1666232441220,
        // // CreateCarImagens1666232493655,
        // // CreateSpecificationsCar1666232541466,
    ],
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
function createConnection(host) {
    if (host === void 0) { host = process.env.NODE_ENV === "test" ? "localhost" : "database"; }
    return exports.AppDataSource.setOptions({ host: host }).initialize();
}
exports.createConnection = createConnection;
exports.default = exports.AppDataSource;
