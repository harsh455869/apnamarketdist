"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ShopRepository = class ShopRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, categoryRepositoryGetter, productRepositoryGetter, cityRepositoryGetter, paymentTransactionRepositoryGetter, userRepositoryGetter) {
        super(models_1.Shop, dataSource);
        this.categoryRepositoryGetter = categoryRepositoryGetter;
        this.productRepositoryGetter = productRepositoryGetter;
        this.cityRepositoryGetter = cityRepositoryGetter;
        this.paymentTransactionRepositoryGetter = paymentTransactionRepositoryGetter;
        this.userRepositoryGetter = userRepositoryGetter;
        this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
        this.registerInclusionResolver('user', this.user.inclusionResolver);
        this.paymentTransaction = this.createBelongsToAccessorFor('paymentTransaction', paymentTransactionRepositoryGetter);
        this.registerInclusionResolver('paymentTransaction', this.paymentTransaction.inclusionResolver);
        this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter);
        this.registerInclusionResolver('products', this.products.inclusionResolver);
    }
};
exports.ShopRepository = ShopRepository;
exports.ShopRepository = ShopRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.apnamarketdb')),
    tslib_1.__param(1, repository_1.repository.getter('CategoryRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ProductRepository')),
    tslib_1.__param(3, repository_1.repository.getter('CityRepository')),
    tslib_1.__param(4, repository_1.repository.getter('PaymentTransactionRepository')),
    tslib_1.__param(5, repository_1.repository.getter('UserRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ApnamarketdbDataSource, Function, Function, Function, Function, Function])
], ShopRepository);
//# sourceMappingURL=shop.repository.js.map