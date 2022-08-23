"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let User = class User {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)()
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "driver_license", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "isAdmin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)()
], User.prototype, "created_at", void 0);
User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
exports.User = User;
