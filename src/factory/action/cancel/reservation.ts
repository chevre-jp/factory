import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { AssetTransactionType } from '../../assetTransactionType';
import { IReservation as IEventReservation } from '../../reservation/event';
import { IAttributes as IInformActionAttributes } from '../interact/inform';

/**
 * 予約キャンセル対象インターフェース
 */
export type IObject = IEventReservation;

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
    typeOf: AssetTransactionType;
    /**
     * 取引ID
     */
    id: string;
}

export type IInformReservation = IInformActionAttributes<IObject, any>;

// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}

/**
 * アクション属性インターフェース
 */
export interface IAttributes extends ActionFactory.IAttributes<ActionType.CancelAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}

/**
 * 予約キャンセルアクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
