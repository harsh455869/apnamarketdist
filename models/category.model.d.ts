import { Entity } from '@loopback/repository';
export declare class Category extends Entity {
    categoryId?: string;
    name?: string;
    description?: string;
    imageUrl?: string;
    city?: string;
    servingPinCodes?: string;
    status?: boolean;
    createdAt?: string;
    [prop: string]: any;
    constructor(data?: Partial<Category>);
}
export interface CategoryRelations {
}
export type CategoryWithRelations = Category & CategoryRelations;
