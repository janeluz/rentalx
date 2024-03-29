"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayjsDateProvider = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
var utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
var DayjsDateProvider = /** @class */ (function () {
    function DayjsDateProvider() {
    }
    DayjsDateProvider.prototype.dateNow = function () {
        throw new Error("Method not implemented.");
    };
    DayjsDateProvider.prototype.compareInHours = function (start_date, end_date) {
        var end_date_utc = this.convertToUTC(end_date);
        var start_date_utc = this.convertToUTC(start_date);
        return (0, dayjs_1.default)(end_date_utc).diff(start_date_utc, "hours");
    };
    DayjsDateProvider.prototype.convertToUTC = function (date) {
        return (0, dayjs_1.default)(date).utc().local().format();
    };
    return DayjsDateProvider;
}());
exports.DayjsDateProvider = DayjsDateProvider;
