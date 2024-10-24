import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { User, UserRelations, Shop } from '../models';
import { PaymentTransactionRepository } from './payment-transaction.repository';
import { ShopRepository } from './shop.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.userId, UserRelations> {
    protected paymentTransactionRepositoryGetter: Getter<PaymentTransactionRepository>;
    protected shopRepositoryGetter: Getter<ShopRepository>;
    readonly shop: BelongsToAccessor<Shop, typeof User.prototype.userId>;
    constructor(dataSource: ApnamarketdbDataSource, paymentTransactionRepositoryGetter: Getter<PaymentTransactionRepository>, shopRepositoryGetter: Getter<ShopRepository>);
}
