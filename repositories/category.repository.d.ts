import { Getter } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { Category, CategoryRelations } from '../models';
import { ShopRepository } from './shop.repository';
export declare class CategoryRepository extends DefaultCrudRepository<Category, typeof Category.prototype.categoryId, CategoryRelations> {
    protected shopRepositoryGetter: Getter<ShopRepository>;
    constructor(dataSource: ApnamarketdbDataSource, shopRepositoryGetter: Getter<ShopRepository>);
}
