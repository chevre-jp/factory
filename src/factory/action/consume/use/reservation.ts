import { PlaceType } from '../../../placeType';
import { IReservation } from '../../../reservation/event';
import * as UseActionFactory from '../use';

export type IObject = IReservation[];
export type IResult = any;
export interface ILocation {
    typeOf: PlaceType.Place;
    identifier: string;
}
export type IPotentialActions = any;

export interface IAttributes extends UseActionFactory.IAttributes<IObject, IResult> {
    location?: ILocation;
    potentialActions?: IPotentialActions;
}

/**
 * 予約使用アクションインターフェース
 */
export type IAction = UseActionFactory.IAction<IAttributes>;
