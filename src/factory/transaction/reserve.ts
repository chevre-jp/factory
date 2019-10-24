import * as ReserveActionFactory from '../action/reserve';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import { IAcceptedTicketOfferWithoutDetail, IEvent as IScreeningEvent } from '../event/screeningEvent';
import { IPropertyValue } from '../propertyValue';
import * as ReservationFactory from '../reservation';
import { IReservation as IEventReservation } from '../reservation/event';
import { IReservation as IReservationPackage } from '../reservation/reservationPackage';
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
 * 指定することで、予約属性を確定時に上書きすることができる
 */
export interface IConfirmingReservation {
    id: string;
    /**
     * Any additional text to appear on a ticket, such as additional privileges or identifiers.
     */
    additionalTicketText?: string;
    reservedTicket?: {
        /**
         * チケット発行者
         */
        issuedBy?: ReservationFactory.IUnderName;
        /**
         * If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI,
         * such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes),
         * "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes).
         */
        ticketToken?: string;
        underName?: ReservationFactory.IUnderName;
    };
    underName?: ReservationFactory.IUnderName;
    additionalProperty?: IPropertyValue<string>[];
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
    reserve?: {
        potentialActions?: {
            informReservation?: IInformReservationParams[];
        };
    };
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
    /**
     * 予約確定後アクション
     */
    potentialActions?: IPotentialActionsParams;
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
    acceptedOffer?: IAcceptedTicketOfferWithoutDetail[];
    clientUser?: IClientUser;
    event?: { id: string };
    reservationFor?: { id: string };
    onReservationStatusChanged?: IOnReservationStatusChanged;
}

export type IReservationFor = IScreeningEvent;
export type ISubReservation = IEventReservation;

/**
 * 取引対象物インターフェース
 */
export interface IObject extends IReservationPackage {
    clientUser?: IClientUser;
    event?: IReservationFor;
    reservationFor?: IReservationFor;
    reservations?: ISubReservation[];
    subReservation?: ISubReservation[];
    onReservationStatusChanged?: IOnReservationStatusChanged;
}

export interface IPotentialActions {
    reserve: ReserveActionFactory.IAttributes[];
}

export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

/**
 * 予約取引インターフェース
 */
export type ITransaction = IExtendId<IAttributes>;

export interface IObjectSearchConditions {
    reservations?: {
        id?: {
            $in?: string[];
        };
        reservationNumber?: {
            $in?: string[];
        };
        reservationFor?: {
            id?: {
                $in?: string[];
            };
        };
    };
}

export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.Reserve> {
    object?: IObjectSearchConditions;
}
