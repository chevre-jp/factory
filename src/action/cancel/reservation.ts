import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { AssetTransactionType } from '../../assetTransactionType';
import { EventType } from '../../eventType';
import { ProductType } from '../../product';
import { IAvailableReservationStatusType } from '../../reservation';
import { ReservationType } from '../../reservationType';
import { TripType } from '../../tripType';

export type IAgent = ActionFactory.IParticipantAsProject;
export interface IReservationPackageAsObject {
    reservationFor: {
        typeOf: EventType.ScreeningEvent | TripType.BusTrip;
        id: string;
    };
    reservationNumber: string;
    /**
     * previousReservationStatusを変更時に指定するために必要
     */
    reservationStatus: IAvailableReservationStatusType;
    // subReservation?: ISubReservation[];
    typeOf: ReservationType.ReservationPackage;
}
export interface IBusReservationAsObject {
    id: string;
    issuedThrough?: {
        typeOf?: ProductType.Transportation;
    };
    reservationFor: {
        typeOf: TripType.BusTrip;
        id: string;
    };
    reservationNumber: string;
    /**
     * previousReservationStatusを変更時に指定するために必要
     */
    reservationStatus: IAvailableReservationStatusType;
    typeOf: ReservationType.BusReservation;
}
export interface IEventReservationAsObject {
    id: string;
    issuedThrough?: {
        typeOf?: ProductType.EventService;
    };
    reservationFor: {
        typeOf: EventType.ScreeningEvent;
        id: string;
    };
    reservationNumber: string;
    /**
     * previousReservationStatusを変更時に指定するために必要
     */
    reservationStatus: IAvailableReservationStatusType;
    typeOf: ReservationType.EventReservation;
}
export type IObject = IBusReservationAsObject | IEventReservationAsObject | IReservationPackageAsObject;
// tslint:disable-next-line:no-empty-interface
export interface IResult { }
export interface IPurpose {
    /**
     * 取引タイプ
     */
    typeOf: AssetTransactionType.Reserve | AssetTransactionType.CancelReservation;
    /**
     * 取引ID
     */
    id: string;
}
export interface IAttributes extends Pick<
    ActionFactory.IAttributes<ActionType.CancelAction, IObject, IResult>,
    'typeOf' | 'result' | 'purpose' | 'project' | 'object' | 'agent'
> {
    agent: IAgent;
    purpose: IPurpose;
}
/**
 * 予約取消アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
