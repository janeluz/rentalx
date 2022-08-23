"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const UsersRepository_1 = require("../../modules/accounts/repositories/implementations/UsersRepository");
const CategoriesRepository_1 = require("../../modules/cars/repositories/implementations/CategoriesRepository");
const SpecificationsRepository_1 = require("../../modules/cars/repositories/implementations/SpecificationsRepository");
tsyringe_1.container.registerSingleton("CategoriesRepository", CategoriesRepository_1.CategoriesRepository);
tsyringe_1.container.registerSingleton("SpecificationsRepository", SpecificationsRepository_1.SpecificationsRepository);
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
