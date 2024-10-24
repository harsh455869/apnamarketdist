"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTransactionRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PaymentTransactionRepository = class PaymentTransactionRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, shopRepositoryGetter) {
        super(models_1.PaymentTransaction, dataSource);
        this.shopRepositoryGetter = shopRepositoryGetter;
    }
};
exports.PaymentTransactionRepository = PaymentTransactionRepository;
exports.PaymentTransactionRepository = PaymentTransactionRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.apnamarketdb')),
    tslib_1.__param(1, repository_1.repository.getter('ShopRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ApnamarketdbDataSource, Function])
], PaymentTransactionRepository);
//# sourceMappingURL=payment-transaction.repository.js.map