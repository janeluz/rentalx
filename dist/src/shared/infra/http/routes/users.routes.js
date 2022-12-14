"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var uploadConfig_1 = __importDefault(require("@config/uploadConfig"));
var CreateUserController_1 = require("@modules/accounts/useCases/createUser/CreateUserController");
var UpdateUserAvatarController_1 = require("@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController");
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
var uploadAvatar = (0, multer_1.default)(uploadConfig_1.default);
var createUserController = new CreateUserController_1.CreateUserController();
var updateUserAvatarController = new UpdateUserAvatarController_1.UpdateUserAvatarController();
usersRoutes.post('/', createUserController.handle);
usersRoutes.patch('/avatar', ensureAuthenticated_1.ensureAuthenticated, uploadAvatar.single('avatar'), updateUserAvatarController.handle);
