import * as ReserveActionFactory from '../action/reserve';
import { IPointAward } from '../action/transfer/moneyTransfer';
import { ActionType } from '../actionType';
import * as AssetTransactionFactory from '../assetTransaction';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { IOrder } from '../order';
import { IPropertyValue } from '../propertyValue';
import * as ReservationFactory from '../reservation';
import {
    IIssuedThrough as IBusReservationIssuedThrough,
    IReservation as IBusReservation,
    IReservationFor as IBusReservationReservationFor
} from '../reservation/busReservation';
import {
    IIssuedThrough as IEventReservationIssuedThrough,
    IReservation as IEventReservation,
    IReservationFor as IEventReservationReservationFor,
    ISubReservation as ISubReservation4eventReservation
} from '../reservation/event';
import { IReservation as IReservationPackage } from '../reservation/reservationPackage';
import { ReservationType } from '../reservationType';
import { IUnitPriceOffer } from '../unitPriceOffer';

// 最適化(2022-05-27~)
export import IAgent = AssetTransactionFactory.IAgent;
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
export interface IBusReservatonAsItemOfferedServiceOutput {
    typeOf: ReservationType.BusReservation;
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
        /**
         * チケット識別子
         * 指定された場合、決済カードの対象チケット識別子と関連付けされます
         * /^[0-9a-zA-Z]{8,16}$/
         */
        identifier?: string; // 拡張(2024-04-15~)
        issuedBy?: ReservationFactory.IUnderName;
        typeOf: ReservationFactory.TicketType;
        /**
         * 座席指定
         */
        ticketedSeat?: ReservationFactory.ISeat;
    };
    subReservation?: IAcceptedSubReservation[];
}
export interface IEventReservatonAsItemOfferedServiceOutput {
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
        /**
         * チケット識別子
         * 指定された場合、決済カードの対象チケット識別子と関連付けされます
         * /^[0-9a-zA-Z]{8,16}$/
         */
        identifier?: string; // 拡張(2024-04-15~)
        issuedBy?: ReservationFactory.IUnderName;
        typeOf: ReservationFactory.TicketType;
        /**
         * 座席指定
         */
        ticketedSeat?: ReservationFactory.ISeat;
    };
    subReservation?: IAcceptedSubReservation[];
}
export type IItemOfferedServiceOutput = IBusReservatonAsItemOfferedServiceOutput | IEventReservatonAsItemOfferedServiceOutput;
/**
 * 受け入れられたオファーのアイテム
 */
export interface IAcceptedTicketOfferItemOffered {
    pointAward?: IAcceptedPointAward;
    serviceOutput?: IItemOfferedServiceOutput;
}
export interface IAcceptedTicketOfferItemOffered4object {
    pointAward?: IPointAward;
    serviceOutput: {
        id: string;
    };
}
/**
 * 予約取引開始時の受入アドオンオファー
 */
export interface IAcceptedAddOn extends Pick<IUnitPriceOffer, 'id'> {
    /**
     * アドオン単価オファーID
     */
    id?: string;
    priceSpecification?: {
        referenceQuantity?: {
            /**
             * 数量指定(2023-08-31~)
             * 単価オファーの基準数量で割り切れる必要あり
             */
            value?: number;
        };
    };
}
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
     * 受入アドオン
     */
    addOn?: IAcceptedAddOn[];
    additionalProperty?: IPropertyValue<string>[];
    priceSpecification?: {
        appliesToMovieTicket?: IAcceptedAppliesToMovieTicket;
    };
}
/**
 * 受け入れられたチケットオファー
 */
export interface IAcceptedOffer4object {
    id: string;
    itemOffered: IAcceptedTicketOfferItemOffered4object;
    priceSpecification?: {
        appliesToMovieTicket?: IAcceptedAppliesToMovieTicket;
    };
}
export type IOrderAsReservePurpose = Pick<IOrder, 'confirmationNumber' | 'orderNumber' | 'typeOf'>;
export interface IPotentialActionsParams {
    reserve?: {
        // purposeの指定があれば、注文情報を予約へ自動連携
        purpose?: IOrderAsReservePurpose;
    };
}
/**
 * 確定パラメータ
 */
export interface IConfirmParams {
    id?: string;
    transactionNumber?: string;
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
export type IReservationFor = IBusReservationReservationFor | IEventReservationReservationFor;
export type IOmittedReservationProperty = 'reservationFor' | 'broker' | 'issuedThrough' | 'provider' | 'reservationStatus'
    // ↓さらに最適化(2024-04-08~)
    | 'project' | 'reservationNumber' | 'bookingTime' | 'modifiedTime' | 'underName' | 'checkedIn' | 'attended';
export type IObjectSubReservation =
    Omit<IBusReservation, IOmittedReservationProperty> | Omit<IEventReservation, IOmittedReservationProperty>;
export type IIssuedThrough = IBusReservationIssuedThrough | IEventReservationIssuedThrough;
/**
 * 取引対象物
 */
export interface IObject extends Pick<IReservationPackage, 'broker' | 'provider' | 'reservationStatus' | 'underName' | 'typeOf'> {
    acceptedOffer?: IAcceptedOffer4object[];
    issuedThrough?: IIssuedThrough;
    reservationFor?: IReservationFor;
    /**
     * 予約番号
     */
    reservationNumber: string;
    subReservation?: IObjectSubReservation[];
    /**
     * trueで固定(2023-07-19~)
     */
    disablePendingReservations: true;
    useHoldStockByTransactionNumber?: boolean;
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
    provider?: {
        id?: { $eq?: string };
    };
    reservationFor?: {
        id?: { $eq?: string };
    };
    reservationNumber?: {
        $eq?: string;
        $in?: string[];
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
        reservedTicket?: {
            ticketedSeat?: {
                seatNumber?: {
                    $eq?: string;
                };
            };
        };
    };
    underName?: {
        id?: { $eq?: string };
    };
}
export interface ISearchConditions extends AssetTransactionFactory.ISearchConditions<AssetTransactionType.Reserve> {
    object?: IObjectSearchConditions;
}
