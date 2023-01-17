"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalRoutes = void 0;
var createController_1 = require("@modules/rentals/useCases/createRental/createController");
var express_1 = require("express");
var rentalRoutes = (0, express_1.Router)();
exports.rentalRoutes = rentalRoutes;
var createRentalController = new createController_1.CreateRentalController();
