import { IAttributes as ICancelReservationActionAttributes } from '../action/cancel/reservation';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import { IReservation as IEventReservation } from '../reservation/event';
import * as TransactionFactory from '../transaction';
import { ITransaction as IReserveTransaction } from '../transaction/reserve';
import TransactionType from '../transactionType';

export type IStartParamsWithoutDetail =
    TransactionFactory.IStartParams<TransactionType.CancelReservation, IAgent, undefined, IObjectWithoutDetail>;

/**
 * 取引開始パラメーターインターフェース
 */
export type IStartParams = TransactionFactory.IStartParams<TransactionType.CancelReservation, IAgent, undefined, IObject>;

export interface IAgent {
    typeOf: string;
    id?: string;
    name: string;
    url?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IResult {
}

/**
 * エラーインターフェース
 */
export type IError = any;

/**
 * 予約ステータス変更時イベントインターフェース
 */
export interface IOnReservationStatusChanged {
    informReservation?: IInformReservationParams[];
}

export interface IObjectWithoutDetail {
    clientUser?: IClientUser;
    /**
     * 取引をキーに取り消す場合
     */
    transaction?: {
        typeOf: TransactionType;
        id: string;
    };
    /**
     * 予約をキーに取り消す場合
     */
    reservation?: {
        id?: string;
        reservationNumber?: string;
    };
    onReservationStatusChanged?: IOnReservationStatusChanged;
}

/**
 * 取引対象物インターフェース
 */
export interface IObject {
    clientUser?: IClientUser;
    transaction?: IReserveTransaction;
    reservations?: IEventReservation[];
    onReservationStatusChanged?: IOnReservationStatusChanged;
}

/**
 * 予約通知パラメータ
 */
export interface IInformReservationParams {
    /**
     * 通知先
     */
    recipient?: {
        /**
         * 通知URL
         */
        url?: string;
    };
}

export interface IPotentialActionsParams {
    cancelReservation?: {
        potentialActions?: {
            informReservation?: IInformReservationParams[];
        };
    };
}

/**
 * 取引確定パラメーターインターフェース
 */
export interface IConfirmParams {
    id: string;
    /**
     * 取引確定後アクション
     */
    potentialActions?: IPotentialActionsParams;
}

export interface IPotentialActions {
    cancelReservation: ICancelReservationActionAttributes[];
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 取引属性インターフェース
 */
export interface IAttributes
    extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.CancelReservation> {
}
