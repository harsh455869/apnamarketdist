import { Entity } from '@loopback/repository';
export declare class PaymentTransaction extends Entity {
    paymentId?: string;
    paymentAmount?: string;
    paymentDetails?: string;
    status?: string;
    referenceId?: string;
    createdAt?: string;
    userId?: string;
    [prop: string]: any;
    constructor(data?: Partial<PaymentTransaction>);
}
export interface PaymentTransactionRelations {
}
export type PaymentTransactionWithRelations = PaymentTransaction & PaymentTransactionRelations;
