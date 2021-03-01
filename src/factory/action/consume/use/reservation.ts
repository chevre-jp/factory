import { IReservation } from '../../../reservation/event';
import * as UseActionFactory from '../use';

export type IObject = IReservation;
export type IResult = any;

export type IPotentialActions = any;

export interface IAttributes extends UseActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * 予約使用アクションインターフェース
 */
export type IAction = UseActionFactory.IAction<IAttributes>;
