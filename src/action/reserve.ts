import * as ActionFactory from '../action';
import { ActionType } from '../actionType';
import { AssetTransactionType } from '../assetTransactionType';
import { OrderType } from '../order';
import { IReservation as IEventReservation } from '../reservation/event';
import { IAttributes as IMoneyTransferActionAttributes } from './transfer/moneyTransfer';

export type IAgent = ActionFactory.IParticipantAsProject;
/**
 * 予約対象
 */
export type IObject = IEventReservation;
/**
 * 予約結果
 */
export type IResult = any;
export interface IOrderAsReservePurpose {
    typeOf: OrderType.Order;
    confirmationNumber?: string;
    orderNumber?: string;
}
export interface IAssetTransactionAsReservePurpose {
    /**
     * 取引タイプ
     */
    typeOf: AssetTransactionType.Reserve;
    /**
     * 取引ID
     */
    id: string;
}
export type IPurpose = IOrderAsReservePurpose | IAssetTransactionAsReservePurpose;
export interface IPotentialActions {
    moneyTransfer?: IMoneyTransferActionAttributes[];
}
/**
 * アクション属性
 */
export interface IAttributes extends ActionFactory.IAttributes<ActionType.ReserveAction, IObject, IResult> {
    agent: IAgent;
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}
/**
 * 予約アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
