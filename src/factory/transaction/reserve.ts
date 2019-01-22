import * as ReserveActionFactory from '../action/reserve';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import { IAcceptedTicketOfferWithoutDetail, IEvent as IScreeningEvent } from '../event/screeningEvent';
import * as ReservationFactory from '../reservation';
import * as EventReservationFactory from '../reservation/event';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

export type IStartParamsWithoutDetail = TransactionFactory.IStartParams<TransactionType.Reserve, IAgent, undefined, IObjectWithoutDetail>;
/**
 * 取引開始パラメーターインターフェース
 */
export type IStartParams = TransactionFactory.IStartParams<TransactionType.Reserve, IAgent, undefined, IObject>;
export interface IAgent {
    typeOf: string;
    id?: string;
    name: string;
    url?: string;
}
/**
 * 確定時予約インターフェース
 */
export interface IConfirmingReservation {
    id: string;
    reservedTicket?: {
        /**
         * チケット発行者
         */
        issuedBy?: ReservationFactory.IUnderName;
    };
    underName?: ReservationFactory.IUnderName;
}
/**
 * 予約確定パラメーターインターフェース
 */
export interface IConfirmParams {
    id: string;
    object?: {
        /**
         * 最終的な予約の属性を指定できます
         */
        reservations: IConfirmingReservation[];
    };
}
// tslint:disable-next-line:no-empty-interface
export interface IResult {
}
/**
 * エラーインターフェース
 */
export type IError = any;
export interface IObjectWithoutDetail {
    clientUser?: IClientUser;
    event: { id: string };
    acceptedOffer: IAcceptedTicketOfferWithoutDetail[];
}
/**
 * 取引対象物インターフェース
 */
export interface IObject {
    clientUser?: IClientUser;
    event: IScreeningEvent;
    reservations: EventReservationFactory.IReservation<IScreeningEvent>[];
}
export interface IPotentialActions {
    reserve: ReserveActionFactory.IAttributes[];
}
export type ITransaction = IExtendId<IAttributes>;
/**
 * 取引属性インターフェース
 */
export interface IAttributes
    extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.Reserve> {
}
