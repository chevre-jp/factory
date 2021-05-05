import * as ActionFactory from '../action';
import ActionType from '../actionType';
import AssetTransactionType from '../assetTransactionType';
import { IReservation as IEventReservation } from '../reservation/event';
import { IAttributes as IInformActionAttributes } from './interact/inform';

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
    typeOf: AssetTransactionType;
    /**
     * 取引ID
     */
    id: string;
}

export type IInformReservation = IInformActionAttributes<IObject, any>;

export interface IPotentialActions {
    /**
     * 予約通知アクション
     */
    informReservation?: IInformReservation[];
}

/**
 * アクション属性インターフェース
 */
export interface IAttributes extends ActionFactory.IAttributes<ActionType.ReserveAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}

/**
 * 予約アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
