import * as ActionFactory from '../action';
import { ActionType } from '../actionType';
import { AssetTransactionType } from '../assetTransactionType';
import { OrderType } from '../order';
import { IAvailableReservationStatusType } from '../reservation';
import { IReservation as IBusReservation, IReservationFor as IBusReservationFor } from '../reservation/busReservation';
import { IReservation as IEventReservation, IReservationFor as IEventReservationFor } from '../reservation/event';
import { ReservationType } from '../reservationType';
import { IAttributes as IMoneyTransferActionAttributes } from './transfer/moneyTransfer';

export type IAgent = ActionFactory.IParticipantAsProject;
// 最適化(2023-06-06~)
export type IOmittedReservationProperty = 'reservationFor' | 'broker' | 'issuedThrough';
export type ISubReservation = Omit<IBusReservation, IOmittedReservationProperty> | Omit<IEventReservation, IOmittedReservationProperty>;
export type IReservationFor = IBusReservationFor | IEventReservationFor;
// ReservationPackageに拡張(2022-12-22~)
export interface IReservationPackageAsObject {
    reservationFor: IReservationFor;
    reservationNumber: string;
    reservationStatus: IAvailableReservationStatusType;
    // 不要なので廃止(2023-01-19~)
    // subReservation?: ISubReservation[];
    // 不要なので廃止(2023-05-31~)→予約取引から取得に変更
    // underName?: IUnderName;
    typeOf: ReservationType.ReservationPackage;
}
// IReservationPackageAsObject以外を廃止(2023-01-19~)
// export type IObject = IBusReservation | IEventReservation | IReservationPackageAsObject;
export type IObject = IReservationPackageAsObject;
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
// export type IPurpose = IOrderAsReservePurpose | IAssetTransactionAsReservePurpose;
export type IPurpose = IAssetTransactionAsReservePurpose;
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
