"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Otp = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Otp = class Otp extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Otp = Otp;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
        mongodb: { dataType: 'ObjectID' },
    }),
    tslib_1.__metadata("design:type", String)
], Otp.prototype, "otpId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Otp.prototype, "mobileNumber", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Otp.prototype, "code", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Otp.prototype, "status", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Otp.prototype, "token", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
    }),
    tslib_1.__metadata("design:type", Boolean)
], Otp.prototype, "isTokenExpired", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Otp.prototype, "isOtpExpired", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        default: () => new Date()
    }),
    tslib_1.__metadata("design:type", String)
], Otp.prototype, "createdAt", void 0);
exports.Otp = Otp = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Otp);
//# sourceMappingURL=otp.model.js.map