"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
var CreateSpecificationController_1 = require("@modules/cars/useCases/createSpecification/CreateSpecificationController");
var express_1 = require("express");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var ensureAdmin_1 = require("@shared/infra/http/middlewares/ensureAdmin");
var specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes = specificationsRoutes;
var createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController();
specificationsRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createSpecificationController.handle);
