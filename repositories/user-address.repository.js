"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddressRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UserAddressRepository = class UserAddressRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, userRepositoryGetter) {
        super(models_1.UserAddress, dataSource);
        this.userRepositoryGetter = userRepositoryGetter;
        this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
        this.registerInclusionResolver('user', this.user.inclusionResolver);
    }
};
exports.UserAddressRepository = UserAddressRepository;
exports.UserAddressRepository = UserAddressRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.apnamarketdb')),
    tslib_1.__param(1, repository_1.repository.getter('UserRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ApnamarketdbDataSource, Function])
], UserAddressRepository);
//# sourceMappingURL=user-address.repository.js.map