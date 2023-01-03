import { IMultilingualString } from '../multilingualString';
import { TripType } from '../tripType';
import { ITrip as IBusTripSeries } from './busTripSeries';

export interface ITrip extends Pick<
    IBusTripSeries,
    'id' | 'name' | 'offers' | 'project' | 'arrivalBusStop' | 'departureBusStop' | 'identifier'
> {
    arrivalTime: Date;
    busName: IMultilingualString;
    busNumber: string;
    departureTime: Date;
    typeOf: TripType.BusTrip;
}
export type ISearchConditions = any;
