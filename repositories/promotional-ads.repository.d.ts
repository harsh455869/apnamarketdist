import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { PromotionalAds, PromotionalAdsRelations, Shop } from '../models';
import { ShopRepository } from './shop.repository';
export declare class PromotionalAdsRepository extends DefaultCrudRepository<PromotionalAds, typeof PromotionalAds.prototype.promotionalAdsId, PromotionalAdsRelations> {
    protected shopRepositoryGetter: Getter<ShopRepository>;
    readonly shop: BelongsToAccessor<Shop, typeof PromotionalAds.prototype.promotionalAdsId>;
    constructor(dataSource: ApnamarketdbDataSource, shopRepositoryGetter: Getter<ShopRepository>);
}
