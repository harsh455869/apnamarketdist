import { Entity } from '@loopback/repository';
export declare class PromotionalAds extends Entity {
    promotionalAdsId?: string;
    name?: string;
    bannerUrl?: string;
    adConfig?: object;
    status: boolean;
    createdAt?: string;
    shopId: string;
    [prop: string]: any;
    constructor(data?: Partial<PromotionalAds>);
}
export interface PromotionalAdsRelations {
}
export type PromotionalAdsWithRelations = PromotionalAds & PromotionalAdsRelations;
