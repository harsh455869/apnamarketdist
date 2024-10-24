"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalAds = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const shop_model_1 = require("./shop.model");
let PromotionalAds = class PromotionalAds extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.PromotionalAds = PromotionalAds;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        mongodb: { dataType: 'ObjectID' },
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalAds.prototype, "promotionalAdsId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalAds.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalAds.prototype, "bannerUrl", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'object',
    }),
    tslib_1.__metadata("design:type", Object)
], PromotionalAds.prototype, "adConfig", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], PromotionalAds.prototype, "status", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalAds.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => shop_model_1.Shop),
    tslib_1.__metadata("design:type", String)
], PromotionalAds.prototype, "shopId", void 0);
exports.PromotionalAds = PromotionalAds = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], PromotionalAds);
//# sourceMappingURL=promotional-ads.model.js.map