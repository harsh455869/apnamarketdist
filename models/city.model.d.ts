import { Entity } from '@loopback/repository';
export declare class City extends Entity {
    cityId?: string;
    name?: string;
    state?: string;
    country?: string;
    createdAt?: string;
    [prop: string]: any;
    constructor(data?: Partial<City>);
}
export interface CityRelations {
}
export type CityWithRelations = City & CityRelations;
