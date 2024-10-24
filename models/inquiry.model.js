"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inquiry = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const product_model_1 = require("./product.model");
const shop_model_1 = require("./shop.model");
const user_model_1 = require("./user.model");
let Inquiry = class Inquiry extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Inquiry = Inquiry;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
        mongodb: { dataType: 'ObjectID' },
    }),
    tslib_1.__metadata("design:type", String)
], Inquiry.prototype, "inquirId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Inquiry.prototype, "customerName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Inquiry.prototype, "mobileNumber", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Inquiry.prototype, "shopName", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => product_model_1.Product),
    tslib_1.__metadata("design:type", String)
], Inquiry.prototype, "productId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => shop_model_1.Shop),
    tslib_1.__metadata("design:type", String)
], Inquiry.prototype, "shopId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => user_model_1.User),
    tslib_1.__metadata("design:type", String)
], Inquiry.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        default: () => new Date()
    }),
    tslib_1.__metadata("design:type", String)
], Inquiry.prototype, "createdAt", void 0);
exports.Inquiry = Inquiry = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Inquiry);
//# sourceMappingURL=inquiry.model.js.map