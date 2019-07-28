import * as ActionFactory from '../action';
import ActionType from '../actionType';
import { IReservation as IEventReservation } from '../reservation/event';
import TransactionType from '../transactionType';

/**
 * 予約対象インターフェース
 */
export type IObject = IEventReservation;
/**
 * 予約結果インターフェース
 */
export type IResult = any;
/**
 * 予約目的インターフェース
 */
export interface IPurpose {
    /**
     * 取引タイプ
     */
    typeOf: TransactionType;
    /**
     * 取引ID
     */
    id: string;
}
/**
 * アクション属性インターフェース
 */
export interface IAttributes extends ActionFactory.IAttributes<ActionType.ReserveAction, IObject, IResult> {
    purpose: IPurpose;
}
/**
 * 予約アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
