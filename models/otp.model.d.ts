import { Entity } from '@loopback/repository';
export declare class Otp extends Entity {
    otpId?: string;
    mobileNumber?: string;
    code?: number;
    status?: string;
    token?: string;
    isTokenExpired?: boolean;
    isOtpExpired?: boolean;
    createdAt?: string;
    [prop: string]: any;
    constructor(data?: Partial<Otp>);
}
export interface OtpRelations {
}
export type OtpWithRelations = Otp & OtpRelations;
