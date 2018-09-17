import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IEvent as IScreeningEvent } from '../../event/screeningEvent';
import { IReservation as IEventReservation } from '../../reservation/event';
import TransactionType from '../../transactionType';

/**
 * 予約キャンセル対象インターフェース
 */
export type IObject = IEventReservation<IScreeningEvent>;
/**
 * 予約キャンセル結果インターフェース
 */
export type IResult = any;
/**
 * 予約キャンセル目的インターフェース
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
export interface IAttributes extends ActionFactory.IAttributes<ActionType.CancelAction, IObject, IResult> {
    purpose: IPurpose;
}
/**
 * 予約キャンセルアクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
