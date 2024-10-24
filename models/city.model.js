"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let City = class City extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.City = City;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
        mongodb: { dataType: 'ObjectID' },
    }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "cityId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "state", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "country", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: () => new Date()
    }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "createdAt", void 0);
exports.City = City = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], City);
//# sourceMappingURL=city.model.js.map