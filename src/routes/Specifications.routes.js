"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
const express_1 = require("express");
const CreateSpecificationController_1 = require("../modules/cars/useCases/createSpecification/CreateSpecificationController");
const specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes = specificationsRoutes;
const createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController();
specificationsRoutes.post("/", createSpecificationController.handle);
