import { Entity } from '@loopback/repository';
export declare class Inquiry extends Entity {
    inquirId?: string;
    customerName?: string;
    mobileNumber?: string;
    shopName?: string;
    productId: string;
    shopId: string;
    userId: string;
    createdAt?: string;
    [prop: string]: any;
    constructor(data?: Partial<Inquiry>);
}
export interface InquiryRelations {
}
export type InquiryWithRelations = Inquiry & InquiryRelations;
