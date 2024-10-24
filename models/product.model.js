"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const category_model_1 = require("./category.model");
const shop_model_1 = require("./shop.model");
const user_model_1 = require("./user.model");
let Product = class Product extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Product = Product;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
        mongodb: { dataType: 'ObjectID' },
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "productId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
    }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "photos", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "discountPercentage", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        default: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product.prototype, "status", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => shop_model_1.Shop),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "shopId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => category_model_1.Category),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "categoryId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => user_model_1.User),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "userId", void 0);
exports.Product = Product = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Product);
//# sourceMappingURL=product.model.js.map