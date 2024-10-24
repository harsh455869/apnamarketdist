"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTransaction = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PaymentTransaction = class PaymentTransaction extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.PaymentTransaction = PaymentTransaction;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
        mongodb: { dataType: 'ObjectID' },
    }),
    tslib_1.__metadata("design:type", String)
], PaymentTransaction.prototype, "paymentId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PaymentTransaction.prototype, "paymentAmount", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PaymentTransaction.prototype, "paymentDetails", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PaymentTransaction.prototype, "status", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PaymentTransaction.prototype, "referenceId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: () => new Date()
    }),
    tslib_1.__metadata("design:type", String)
], PaymentTransaction.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PaymentTransaction.prototype, "userId", void 0);
exports.PaymentTransaction = PaymentTransaction = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], PaymentTransaction);
//# sourceMappingURL=payment-transaction.model.js.map