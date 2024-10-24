"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let InquiryRepository = class InquiryRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productRepositoryGetter, shopRepositoryGetter, userRepositoryGetter) {
        super(models_1.Inquiry, dataSource);
        this.productRepositoryGetter = productRepositoryGetter;
        this.shopRepositoryGetter = shopRepositoryGetter;
        this.userRepositoryGetter = userRepositoryGetter;
        this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
        this.registerInclusionResolver('user', this.user.inclusionResolver);
        this.shop = this.createBelongsToAccessorFor('shop', shopRepositoryGetter);
        this.registerInclusionResolver('shop', this.shop.inclusionResolver);
        this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);
        this.registerInclusionResolver('product', this.product.inclusionResolver);
    }
};
exports.InquiryRepository = InquiryRepository;
exports.InquiryRepository = InquiryRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.apnamarketdb')),
    tslib_1.__param(1, repository_1.repository.getter('ProductRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ShopRepository')),
    tslib_1.__param(3, repository_1.repository.getter('UserRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ApnamarketdbDataSource, Function, Function, Function])
], InquiryRepository);
//# sourceMappingURL=inquiry.repository.js.map