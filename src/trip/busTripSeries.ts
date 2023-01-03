import { IPlace } from '../place';
import { IProject } from '../project';
import { ITrip as IBaseTrip } from '../trip';
import { TripType } from '../tripType';

export type IBusStop = Pick<IPlace, 'typeOf' | 'branchCode' | 'name'>;
export interface ITrip extends Pick<IBaseTrip, 'id' | 'name' | 'offers'> {
    arrivalBusStop: IBusStop;
    departureBusStop: IBusStop;
    identifier: string;
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: TripType.BusTripSeries;
}
export type ISearchConditions = any;
