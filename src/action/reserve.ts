import * as ActionFactory from '../action';
import { ActionType } from '../actionType';
import { AssetTransactionType } from '../assetTransactionType';
import { IAvailableReservationStatusType } from '../reservation';
import { IReservationFor as IBusReservationFor } from '../reservation/busReservation';
import { IReservationFor as IEventReservationFor } from '../reservation/event';
import { ReservationType } from '../reservationType';
import { IAttributes as IMoneyTransferActionAttributes } from './transfer/moneyTransfer';

export type IAgent = ActionFactory.IParticipantAsProject;
// optimize(2024-01-24~)
// export type IReservationFor = IBusReservationFor | IEventReservationFor;
export type IReservationFor = (Pick<IBusReservationFor, 'id' | 'typeOf'> | Pick<IEventReservationFor, 'id' | 'typeOf'>) & {
    optimized: boolean;
};
// IReservationPackageAsObject以外を廃止(2023-01-19~)
export interface IObject {
    reservationFor: IReservationFor;
    reservationNumber: string;
    reservationStatus: IAvailableReservationStatusType;
    typeOf: ReservationType.ReservationPackage;
}
export interface IResult {
    confirmedReservationId?: string;
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
