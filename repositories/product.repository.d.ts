import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { Product, ProductRelations, Shop, Category, User } from '../models';
import { ShopRepository } from './shop.repository';
import { CategoryRepository } from './category.repository';
import { UserRepository } from './user.repository';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.productId, ProductRelations> {
    protected shopRepositoryGetter: Getter<ShopRepository>;
    protected categoryRepositoryGetter: Getter<CategoryRepository>;
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly shop: BelongsToAccessor<Shop, typeof Product.prototype.productId>;
    readonly category: BelongsToAccessor<Category, typeof Product.prototype.productId>;
    readonly user: BelongsToAccessor<User, typeof Product.prototype.productId>;
    constructor(dataSource: ApnamarketdbDataSource, shopRepositoryGetter: Getter<ShopRepository>, categoryRepositoryGetter: Getter<CategoryRepository>, userRepositoryGetter: Getter<UserRepository>);
}
