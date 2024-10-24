import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { PaymentTransaction, Product, Shop, ShopRelations, User } from '../models';
import { CategoryRepository } from './category.repository';
import { CityRepository } from './city.repository';
import { PaymentTransactionRepository } from './payment-transaction.repository';
import { ProductRepository } from './product.repository';
import { UserRepository } from './user.repository';
export declare class ShopRepository extends DefaultCrudRepository<Shop, typeof Shop.prototype.shopId, ShopRelations> {
    protected categoryRepositoryGetter: Getter<CategoryRepository>;
    protected productRepositoryGetter: Getter<ProductRepository>;
    protected cityRepositoryGetter: Getter<CityRepository>;
    protected paymentTransactionRepositoryGetter: Getter<PaymentTransactionRepository>;
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly products: HasManyRepositoryFactory<Product, typeof Shop.prototype.shopId>;
    readonly paymentTransaction: BelongsToAccessor<PaymentTransaction, typeof Shop.prototype.shopId>;
    readonly user: BelongsToAccessor<User, typeof Shop.prototype.shopId>;
    constructor(dataSource: ApnamarketdbDataSource, categoryRepositoryGetter: Getter<CategoryRepository>, productRepositoryGetter: Getter<ProductRepository>, cityRepositoryGetter: Getter<CityRepository>, paymentTransactionRepositoryGetter: Getter<PaymentTransactionRepository>, userRepositoryGetter: Getter<UserRepository>);
}
