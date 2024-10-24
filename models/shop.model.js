"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const payment_transaction_model_1 = require("./payment-transaction.model");
const product_model_1 = require("./product.model");
const user_model_1 = require("./user.model");
let Shop = class Shop extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Shop = Shop;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        mongodb: { dataType: 'ObjectID' },
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Shop.prototype, "shopId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Shop.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        default: [],
    }),
    tslib_1.__metadata("design:type", Array)
], Shop.prototype, "servingPinCodes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Shop.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
    }),
    tslib_1.__metadata("design:type", Array)
], Shop.prototype, "photos", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Shop.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        default: () => new Date()
    }),
    tslib_1.__metadata("design:type", String)
], Shop.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Shop.prototype, "city", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        default: [],
    }),
    tslib_1.__metadata("design:type", Array)
], Shop.prototype, "categories", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => product_model_1.Product),
    tslib_1.__metadata("design:type", Array)
], Shop.prototype, "products", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => payment_transaction_model_1.PaymentTransaction),
    tslib_1.__metadata("design:type", String)
], Shop.prototype, "paymentTransactionId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => user_model_1.User),
    tslib_1.__metadata("design:type", String)
], Shop.prototype, "userId", void 0);
exports.Shop = Shop = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Shop);
//# sourceMappingURL=shop.model.js.map