"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, paymentTransactionRepositoryGetter, shopRepositoryGetter) {
        super(models_1.User, dataSource);
        this.paymentTransactionRepositoryGetter = paymentTransactionRepositoryGetter;
        this.shopRepositoryGetter = shopRepositoryGetter;
        this.shop = this.createBelongsToAccessorFor('shop', shopRepositoryGetter);
        this.registerInclusionResolver('shop', this.shop.inclusionResolver);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.apnamarketdb')),
    tslib_1.__param(1, repository_1.repository.getter('PaymentTransactionRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ShopRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ApnamarketdbDataSource, Function, Function])
], UserRepository);
//# sourceMappingURL=user.repository.js.map