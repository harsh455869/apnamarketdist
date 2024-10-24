import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { Inquiry, InquiryRelations, Product, Shop, User } from '../models';
import { ProductRepository } from './product.repository';
import { ShopRepository } from './shop.repository';
import { UserRepository } from './user.repository';
export declare class InquiryRepository extends DefaultCrudRepository<Inquiry, typeof Inquiry.prototype.inquirId, InquiryRelations> {
    protected productRepositoryGetter: Getter<ProductRepository>;
    protected shopRepositoryGetter: Getter<ShopRepository>;
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly product: BelongsToAccessor<Product, typeof Inquiry.prototype.inquirId>;
    readonly shop: BelongsToAccessor<Shop, typeof Inquiry.prototype.inquirId>;
    readonly user: BelongsToAccessor<User, typeof Inquiry.prototype.inquirId>;
    constructor(dataSource: ApnamarketdbDataSource, productRepositoryGetter: Getter<ProductRepository>, shopRepositoryGetter: Getter<ShopRepository>, userRepositoryGetter: Getter<UserRepository>);
}
