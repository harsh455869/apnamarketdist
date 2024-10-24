import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    userId?: string;
    name?: string;
    email?: string;
    mobileNumber?: string;
    userType?: string;
    city?: string;
    status?: string;
    aadhaarCardNumber?: string;
    isUserActive?: boolean;
    panCardNumber?: string;
    aadhaarCardUrl?: string[];
    panCardUrl?: string;
    paymentDoneAt?: Date;
    createdAt?: string;
    shopId: string;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;
