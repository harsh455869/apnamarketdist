import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    name?: string;
    productId?: string;
    photos?: string[];
    price?: string;
    discountPercentage?: string;
    description?: string;
    status?: boolean;
    shopId: string;
    categoryId: string;
    userId: string;
    [prop: string]: any;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export type ProductWithRelations = Product & ProductRelations;
