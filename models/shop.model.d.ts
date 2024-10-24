import { Entity } from '@loopback/repository';
import { Product } from './product.model';
export declare class Shop extends Entity {
    shopId?: string;
    name?: string;
    servingPinCodes?: string[];
    ownerName?: string;
    address?: string;
    photos?: string[];
    description?: string;
    createdAt?: string;
    city: string;
    categories?: string[];
    products: Product[];
    paymentTransactionId: string;
    userId: string;
    [prop: string]: any;
    constructor(data?: Partial<Shop>);
}
export interface ShopRelations {
}
export type ShopWithRelations = Shop & ShopRelations;
