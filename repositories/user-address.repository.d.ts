import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { UserAddress, UserAddressRelations, User } from '../models';
import { UserRepository } from './user.repository';
export declare class UserAddressRepository extends DefaultCrudRepository<UserAddress, typeof UserAddress.prototype.userAddressId, UserAddressRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly user: BelongsToAccessor<User, typeof UserAddress.prototype.userAddressId>;
    constructor(dataSource: ApnamarketdbDataSource, userRepositoryGetter: Getter<UserRepository>);
}
