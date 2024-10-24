import { Entity } from '@loopback/repository';
export declare class UserAddress extends Entity {
    userAddressId?: string;
    customerName?: string;
    mobileNumber?: string;
    pincode?: number;
    address?: string;
    city?: string;
    state?: string;
    addressType?: string;
    isDefault?: Boolean;
    createdAt?: string;
    userId: string;
    constructor(data?: Partial<UserAddress>);
}
export interface UserAddressRelations {
}
export type UserAddressWithRelations = UserAddress & UserAddressRelations;
