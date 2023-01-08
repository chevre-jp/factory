import { IMultilingualString } from '../multilingualString';
import { IPlace as IBusStop } from '../place/busStop';
import { IProject } from '../project';
import { ITrip as IBaseTrip } from '../trip';
import { TripType } from '../tripType';

export type IArrivalBusStop = Pick<IBusStop, 'typeOf' | 'branchCode' | 'name'>;
export type IDepartureBusStop = Pick<IBusStop, 'typeOf' | 'branchCode' | 'name'>;
export interface ITrip extends Pick<IBaseTrip, 'id' | 'name' | 'offers'> {
    arrivalBusStop: IArrivalBusStop;
    departureBusStop: IDepartureBusStop;
    identifier: string;
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: TripType.BusTrip;
}
export interface ITripWithDetails extends Pick<
    ITrip,
    'id' | 'name' | 'arrivalBusStop' | 'departureBusStop' | 'identifier' | 'typeOf'
> {
    arrivalTime: Date;
    busName: IMultilingualString;
    busNumber: string;
    departureTime: Date;
}
export type ISortOrder = any;
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { id?: { $eq?: string } };
    id?: { $in?: string[] };
    identifier?: { $eq?: string };
    name?: { $regex?: string };
    typeOf: TripType;
    additionalProperty?: {
        $elemMatch?: {
            name?: {
                /**
                 * 一致する名称の追加特性がひとつでも存在する
                 */
                $eq?: string;
            };
        };
    };
}
