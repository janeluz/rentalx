"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.NODE_ENV,
    port: 5432,
    username: 'postgres',
    password: '121013',
    database: process.env.NODE_ENV === 'test' ? 'rentalx_test' : 'rentalx',
    synchronize: true,
    logging: true,
    entities: ['src/modules/**/infra/typeorm/entities/*.ts'],
    migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
});
function createConnection(host) {
    if (host === void 0) { host = process.env.NODE_ENV === 'test' ? 'localhost' : 'database'; }
    return exports.AppDataSource.setOptions({ host: host }).initialize();
}
exports.createConnection = createConnection;
exports.default = exports.AppDataSource;
