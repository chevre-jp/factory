import * as ReserveActionFactory from '../action/reserve';
import { ActionType } from '../actionType';
import * as AssetTransactionFactory from '../assetTransaction';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { ITicketOffer } from '../event/screeningEvent';
import { IMovieTicket } from '../paymentMethod/paymentCard/movieTicket';
import { IPointAward } from '../product';
import { IPropertyValue } from '../propertyValue';
import * as ReservationFactory from '../reservation';
import {
    IReservation as IEventReservation,
    IReservationFor as IEventReservationReservationFor,
    ISubReservation as ISubReservation4eventReservation
} from '../reservation/event';
import { IReservation as IReservationPackage } from '../reservation/reservationPackage';
import { ReservationType } from '../reservationType';

// 最適化(2022-05-27~)
export import IAgent = AssetTransactionFactory.IAgent;
// export interface IAgent {
//     typeOf: ReservationFactory.IUnderNameType;
//     id?: string;
//     name: string;
//     url?: string;
// }
export type IStartParamsWithoutDetail =
    AssetTransactionFactory.IStartParams<AssetTransactionType.Reserve, IAgent, undefined, IObjectWithoutDetail>;
/**
 * 取引開始パラメータ
 */
export type IStartParams = AssetTransactionFactory.IStartParams<AssetTransactionType.Reserve, IAgent, undefined, IObject>;
export interface IAcceptedProgramMembershipUsedAsObject {
    accessCode?: string;
    /**
     * メンバーシップコード
     */
    identifier: string;
    issuedThrough: {
        /**
         * メンバーシップ発行サービスID
         */
        id: string;
    };
}
/**
 * トークン化された適用メンバーシップ
 */
export type ITokenizedAcceptedProgramMembershipUsed = string;
/**
 * 適用メンバーシップ
 */
export type IAcceptedProgramMembershipUsed = IAcceptedProgramMembershipUsedAsObject | ITokenizedAcceptedProgramMembershipUsed;
export type IAcceptedSubReservation = ISubReservation4eventReservation;
export interface IAcceptedPointAward {
    typeOf: ActionType.MoneyTransfer;
    recipient?: any;
    /**
     * 特典付与先
     */
    toLocation?: {
        /**
         * カード番号
         */
        identifier: string;
        issuedThrough: {
            /**
             * カード発行サービスID
             */
            id: string;
        };
    };
}
/**
 * 受け入れられたオファーのアイテム
 */
export interface IAcceptedTicketOfferItemOffered {
    pointAward?: IAcceptedPointAward;
    serviceOutput?: {
        typeOf: ReservationType.EventReservation;
        /**
         * 追加特性
         */
        additionalProperty?: IPropertyValue<string>[];
        /**
         * 予約追加テキスト
         */
        additionalTicketText?: string;
        // 適用メンバーシップ
        programMembershipUsed?: IAcceptedProgramMembershipUsed;
        reservedTicket?: {
            issuedBy?: ReservationFactory.IUnderName;
            typeOf: ReservationFactory.TicketType;
            /**
             * 予約座席指定
             * 指定席イベントの場合、座席を指定
             * 自由席イベントの場合、あるいは、最大収容人数がないイベントの場合は、座席指定不要
             */
            ticketedSeat?: ReservationFactory.ISeat;
        };
        subReservation?: IAcceptedSubReservation[];
    };
}
export interface IAcceptedTicketOfferItemOffered4object {
    pointAward?: IPointAward;
    serviceOutput: {
        id: string;
    };
}
export interface IAcceptedAddOn {
    /**
     * アドオンID
     */
    id?: string;
}
export type IAcceptedPaymentMethod = IMovieTicket;
export interface ISingleAcceptedAppliesToMovieTicket {
    /**
     * 適用決済カード識別子
     */
    identifier?: string;
}
/**
 * 複数承認適用決済カード
 * 複数指定の場合、カード識別子と決済方法区分の組み合わせで指定します
 */
export type IMultipleAcceptedAppliesToMovieTicket = {
    /**
     * 適用決済カード識別子
     */
    identifier?: string;
    serviceOutput?: {
        /**
         * 決済方法区分
         */
        typeOf?: string;
    };
}[];
/**
 * 承認適用決済カード
 */
export type IAcceptedAppliesToMovieTicket = ISingleAcceptedAppliesToMovieTicket | IMultipleAcceptedAppliesToMovieTicket;
/**
 * 受け入れられたチケットオファー(詳細なし)
 */
export interface IAcceptedTicketOfferWithoutDetail {
    /**
     * オファーID
     */
    id: string;
    /**
     * アイテム情報
     * 予約の詳細指定など
     */
    itemOffered?: IAcceptedTicketOfferItemOffered;
    /**
     * 受け入れるアドオン
     */
    addOn?: IAcceptedAddOn[];
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty?: IPropertyValue<string>[];
    priceSpecification?: {
        appliesToMovieTicket?: IAcceptedAppliesToMovieTicket;
    };
}
/**
 * 受け入れられたチケットオファー
 */
export type IAcceptedTicketOffer = Omit<IAcceptedTicketOfferWithoutDetail, 'priceSpecification'>
    & ITicketOffer
    & {
        itemOffered?: IAcceptedTicketOfferItemOffered;
    };
export interface IAcceptedOffer4object {
    id: string;
    itemOffered: IAcceptedTicketOfferItemOffered4object;
    priceSpecification?: {
        appliesToMovieTicket?: IAcceptedAppliesToMovieTicket;
    };
}
/**
 * 確定時予約
 * 指定することで、予約属性を確定時に上書きすることができる
 */
export interface IConfirmingReservation {
    id: string;
    /**
     * Any additional text to appear on a ticket, such as additional privileges or identifiers.
     */
    // additionalTicketText?: string;
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
        // ticketToken?: string;
        // underName?: ReservationFactory.IUnderName;
    };
    underName?: ReservationFactory.IUnderName;
    // additionalProperty?: IPropertyValue<string>[];
}
export interface IPotentialActionsParams {
    reserve?: {
        // purposeの指定があれば、注文情報を予約へ自動連携
        purpose?: ReserveActionFactory.IOrderAsReservePurpose;
    };
}
/**
 * 確定パラメータ
 */
export interface IConfirmParams {
    id?: string;
    transactionNumber?: string;
    object?: {
        /**
         * 最終的な予約の属性を指定
         */
        reservations: IConfirmingReservation[];
    };
    potentialActions?: IPotentialActionsParams;
}
// tslint:disable-next-line:no-empty-interface
export interface IResult {
}
/**
 * エラー
 */
export type IError = any;
export interface IObjectWithoutDetail {
    acceptedOffer?: IAcceptedTicketOfferWithoutDetail[];
    broker?: ReservationFactory.IBroker;
    reservationFor?: { id: string };
}
// IReservationForを最適化
export type IReservationFor = IEventReservationReservationFor;
// export interface IEventReservationWithAnyReservationFor extends IEventReservation {
//     reservationFor: any;
// }
// export interface ISubReservation extends IEventReservationWithAnyReservationFor {
//     reservationFor: undefined;
// }
// 取引のsubReservationからはreservationForを削除する
export type IObjectSubReservation = Omit<IEventReservation, 'reservationFor'>;
/**
 * 取引対象物
 */
export interface IObject extends IReservationPackage {
    acceptedOffer?: IAcceptedOffer4object[];
    reservationFor?: IReservationFor;
    subReservation?: IObjectSubReservation[];
}
export interface IPotentialActions {
    reserve: ReserveActionFactory.IAttributes[];
}
export interface IAttributes extends AssetTransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
/**
 * 予約取引
 */
export type ITransaction = IExtendId<IAttributes>;
export interface IObjectSearchConditions {
    reservationNumber?: {
        $eq?: string;
    };
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
export interface ISearchConditions extends AssetTransactionFactory.ISearchConditions<AssetTransactionType.Reserve> {
    object?: IObjectSearchConditions;
}
