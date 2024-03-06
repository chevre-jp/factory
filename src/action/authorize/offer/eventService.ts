import type * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import * as ReserveTransactionFactory from '../../../assetTransaction/reserve';
import { AssetTransactionType } from '../../../assetTransactionType';
import * as ScreeningEventFactory from '../../../event/screeningEvent';
import * as OfferFactory from '../../../offer';
import * as OrderFactory from '../../../order';
import { PriceCurrency } from '../../../priceCurrency';
import { ITicketOffer, ITicketPriceSpecification } from '../../../product';
import * as WebAPIFactory from '../../../service/webAPI';
import { TransactionType } from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

import * as COAReservationOfferFactory from './eventService/coa';

export type IAgent = ActionFactory.IParticipantAsSeller;
export type IRecipient = ActionFactory.IParticipantAsWebApplication | ActionFactory.IParticipantAsPerson;

export enum ObjectType {
    SeatReservation = 'SeatReservation'
}

export type IInstrument<T extends WebAPIFactory.Identifier> = WebAPIFactory.IService<T> & {
    /**
     * Chevre->予約取引番号
     * COA->仮予約番号
     */
    transactionNumber?: string;
};

export type IRequestBody<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? COA.factory.reserve.IUpdTmpReserveSeatArgs :
    T extends WebAPIFactory.Identifier.Chevre ? {} :
    never;
export type IResponseBody<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? COA.factory.reserve.IUpdTmpReserveSeatResult :
    T extends WebAPIFactory.Identifier.Chevre ? {} :
    never;

export type IResultAcceptedOffer = OrderFactory.IAcceptedOffer<OrderFactory.IReservation>;

/**
 * 承認アクション結果
 */
export interface IResult<T extends WebAPIFactory.Identifier> {
    /**
     * 決済金額
     * オファー未指定の場合、金額非確定なので、この属性は存在しない
     */
    price?: number; // noOfferSpecifiedに対応(2023-11-27~)
    priceCurrency: PriceCurrency;
    /**
     * オファーに対して必要な金額
     * currencyを口座タイプとして扱う
     */
    amount: OrderFactory.ITotalPaymentDue[];
    /**
     * 外部サービスへのリクエスト
     */
    requestBody: IRequestBody<T>;
    /**
     * 外部サービスからのレスポンス
     */
    responseBody: IResponseBody<T>;
    acceptedOffers?: IResultAcceptedOffer[];
}

export type IAcceptedOfferPriceSpecification = ITicketPriceSpecification
    & {
        /**
         * 複合価格仕様に、指定された適用決済カード情報を付加できるように
         */
        appliesToMovieTicket?: ReserveTransactionFactory.IAcceptedAppliesToMovieTicket;
    };
/**
 * 受け入れられたチケットオファー
 */
export type IAcceptedOffer4chevre = Pick<
    ITicketOffer,
    'acceptedPaymentMethod' | // add(2023-11-15~)
    'id' | 'identifier' | 'typeOf' |
    'priceCurrency' |
    'itemOffered' | 'additionalProperty'
>
    & Pick<ReserveTransactionFactory.IAcceptedTicketOfferWithoutDetail, 'id' | 'addOn' | 'additionalProperty'>
    & {
        addOn?: ReserveTransactionFactory.IAcceptedAddOn[];
        itemOffered?: ReserveTransactionFactory.IAcceptedTicketOfferItemOffered;
        priceSpecification: IAcceptedOfferPriceSpecification;
    };
export type IAcceptedOfferWithoutDetail4chevre = ReserveTransactionFactory.IAcceptedTicketOfferWithoutDetail;
export type IObjectWithoutDetail4chevre = ReserveTransactionFactory.IObjectWithoutDetail;

export import ICOATicketInfo = COAReservationOfferFactory.ICOATicketInfo;
export import ICOATicketInfoWithDetails = COAReservationOfferFactory.ICOATicketInfoWithDetails;
/**
 * 受入COA興行オファー
 */
export type IAcceptedOffer4COA = Pick<ReserveTransactionFactory.IAcceptedTicketOfferWithoutDetail,
    'id' | 'itemOffered' | 'additionalProperty'
> & Pick<
    OfferFactory.IOffer,
    'typeOf' | 'id' | 'identifier' | 'name'
    | 'priceCurrency' | 'additionalProperty' | 'eligibleMonetaryAmount'
> & {
    itemOffered: ReserveTransactionFactory.IAcceptedTicketOfferItemOffered;
    ticketInfo: ICOATicketInfoWithDetails;
    /**
     * COAイベントでは、priceSpecificationで価格を表現しきれないので、numberとしてのpriceが必要
     */
    price: number;
    priceSpecification: OrderFactory.ITicketPriceSpecification;
};
export interface IAppliesToSurfrock {
    /**
     * コード
     */
    identifier?: string;
    serviceOutput?: {
        /**
         * 決済方法区分
         */
        typeOf?: string;
    };
}
export interface IPriceSpecification4COA {
    appliesToSurfrock?: IAppliesToSurfrock;
}
export type IAcceptedOfferBeforeAuthorize4COA = Pick<ReserveTransactionFactory.IAcceptedTicketOfferWithoutDetail,
    'itemOffered' | 'additionalProperty'
> & Pick<
    OfferFactory.IOffer,
    'name' | 'additionalProperty'
> & {
    itemOffered: ReserveTransactionFactory.IAcceptedTicketOfferItemOffered;
    ticketInfo: Omit<ICOATicketInfoWithDetails, 'salePrice' | 'usePoint'>;
    priceSpecification: IPriceSpecification4COA;
};
export type IAcceptedOfferWithoutDetail4COA = COAReservationOfferFactory.IOffer & {
    // オファーごとに指定可能化(2023-08-02~)
    priceSpecification?: IPriceSpecification4COA;
};
export interface IObjectWithoutDetail4COA {
    acceptedOffer: IAcceptedOfferWithoutDetail4COA[];
    event: {
        id: string;
    };
}

export type IAcceptedOffer<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? IAcceptedOffer4COA :
    T extends WebAPIFactory.Identifier.Chevre ? IAcceptedOffer4chevre :
    never;

export type IAcceptedOfferWithoutDetail<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? IAcceptedOfferWithoutDetail4COA :
    T extends WebAPIFactory.Identifier.Chevre ? IAcceptedOfferWithoutDetail4chevre :
    never;

export type IObjectWithoutDetail<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? IObjectWithoutDetail4COA :
    T extends WebAPIFactory.Identifier.Chevre ? IObjectWithoutDetail4chevre :
    never;

// COAケースの進行中取引を定義(2023-09-11~)
export type ICOAPendingTransaction = Pick<
    COA.factory.reserve.IDelTmpReserveArgs,
    'theaterCode' | 'dateJouei' | 'titleCode' | 'titleBranchNum' | 'timeBegin' | 'tmpReserveNum'
> & {
    transactionNumber: string;
    typeOf: 'COAReserveTransaction';
};
export interface IChevrePendingTransaction {
    transactionNumber: string;
    typeOf: AssetTransactionType.Reserve;
}
export type IPendingTransaction<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? ICOAPendingTransaction :
    T extends WebAPIFactory.Identifier.Chevre ? IChevrePendingTransaction :
    never;

export type IEvent = Pick<ScreeningEventFactory.IEvent, 'id' | 'typeOf'> & {
    offers: {
        // イベント提供サービスを識別できるようにするために追加(2022-06-03~)
        offeredThrough: ScreeningEventFactory.IOfferedThrough;
    };
};
/**
 * 興行オファー承認アクション対象
 */
export type IObject<T extends WebAPIFactory.Identifier> = {
    typeOf: ObjectType;
    event?: IEvent;
    acceptedOffer: IAcceptedOffer<T>[];
    /**
     * 進行中取引
     */
    pendingTransaction: IPendingTransaction<T>;
    /**
     * result.acceptedOffers廃止に際して使用有無を保管
     */
    useResultAcceptedOffers?: boolean;
} & Omit<IObjectWithoutDetail<T>, 'acceptedOffer' | 'reservationFor'>;

export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export type IError = any;
export interface IAttributes<T extends WebAPIFactory.Identifier>
    extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult<T>> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject<T>;
    purpose: IPurpose;
    instrument: IInstrument<T>;
}
/**
 * 興行オファー承認アクション
 */
export type IAction<T extends WebAPIFactory.Identifier> = ActionFactory.IAction<IAttributes<T>>;
