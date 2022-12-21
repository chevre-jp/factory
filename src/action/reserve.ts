import * as ActionFactory from '../action';
import { ActionType } from '../actionType';
import { AssetTransactionType } from '../assetTransactionType';
import { OrderType } from '../order';
import { IUnderName } from '../reservation';
import { IReservation as IEventReservation, IReservationFor } from '../reservation/event';
import { ReservationStatusType } from '../reservationStatusType';
import { ReservationType } from '../reservationType';
import { IAttributes as IMoneyTransferActionAttributes } from './transfer/moneyTransfer';

export type IAgent = ActionFactory.IParticipantAsProject;
export type ISubReservation = Omit<IEventReservation, 'reservationFor'>;
// ReservationPackageに拡張(2022-12-22~)
export interface IReservationPackageAsObject {
    reservationFor: IReservationFor;
    reservationNumber: string;
    reservationStatus: ReservationStatusType;
    subReservation?: ISubReservation[];
    underName?: IUnderName;
    typeOf: ReservationType.ReservationPackage;
}
export type IObject = IEventReservation | IReservationPackageAsObject;
export interface IResult {
    confirmedReservationId?: string;
}
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
export interface IAttributes extends ActionFactory.IAttributes<ActionType.ReserveAction, IObject, IResult> {
    agent: IAgent;
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}
/**
 * 予約アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
