"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var typeorm_1 = require("@shared/infra/typeorm");
require("@shared/infra/typeorm");
require("@shared/container");
var swagger_json_1 = __importDefault(require("../../../../swagger.json"));
var AppError_1 = require("@shared/errors/AppError");
var routes_1 = require("./routes");
(0, typeorm_1.createConnection)();
var app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use('/api', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.router);
// Se o erro for uma instância do AppError geramos um erro customizado
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    // Se não, vamos retornar um Internal server error
    return response.status(500).json({
        status: 'error',
        message: "Internal server error - ".concat(err.message),
    });
});
