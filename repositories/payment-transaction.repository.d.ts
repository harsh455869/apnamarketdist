import { Getter } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { PaymentTransaction, PaymentTransactionRelations } from '../models';
import { ShopRepository } from './shop.repository';
export declare class PaymentTransactionRepository extends DefaultCrudRepository<PaymentTransaction, typeof PaymentTransaction.prototype.paymentId, PaymentTransactionRelations> {
    protected shopRepositoryGetter: Getter<ShopRepository>;
    constructor(dataSource: ApnamarketdbDataSource, shopRepositoryGetter: Getter<ShopRepository>);
}
