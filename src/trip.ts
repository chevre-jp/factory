import { IThing } from './thing';
import { TripType } from './tripType';

/**
 * トリップ
 * {@link https://schema.org/Trip}
 */
export interface ITrip extends Pick<IThing, 'name'> {
    arrivalTime: Date;
    departureTime: Date;
    id?: string;
    // itinerary: Date;
    offers?: any;
    // partOfTrip: Date;
    // provider: Date;
    // subTrip: Date;
    typeOf: TripType;
}
