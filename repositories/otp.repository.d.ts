import { DefaultCrudRepository } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { Otp, OtpRelations } from '../models';
export declare class OtpRepository extends DefaultCrudRepository<Otp, typeof Otp.prototype.otpId, OtpRelations> {
    constructor(dataSource: ApnamarketdbDataSource);
}
