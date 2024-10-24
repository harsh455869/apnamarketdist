import { DefaultCrudRepository } from '@loopback/repository';
import { ApnamarketdbDataSource } from '../datasources';
import { City, CityRelations } from '../models';
export declare class CityRepository extends DefaultCrudRepository<City, typeof City.prototype.cityId, CityRelations> {
    constructor(dataSource: ApnamarketdbDataSource);
}
