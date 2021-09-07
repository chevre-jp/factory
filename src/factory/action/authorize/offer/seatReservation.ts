import * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import * as ReserveTransactionFactory from '../../../assetTransaction/reserve';
import AssetTransactionType from '../../../assetTransactionType';
import * as ScreeningEventFactory from '../../../event/screeningEvent';
import { IMonetaryAmount } from '../../../monetaryAmount';
import * as OfferFactory from '../../../offer';
import * as OrderFactory from '../../../order';
import PriceCurrency from '../../../priceCurrency';
import * as WebAPIFactory from '../../../service/webAPI';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    SeatReservation = 'SeatReservation'
}

export type IInstrument<T extends WebAPIFactory.Identifier> = WebAPIFactory.IService<T>;

export type IRequestBody<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? COA.factory.reserve.IUpdTmpReserveSeatArgs :
    // T extends WebAPIIdentifier.Chevre ? chevre.transaction.reserve.ITransaction :
    any;
export type IResponseBody<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? COA.factory.reserve.IUpdTmpReserveSeatResult :
    T extends WebAPIFactory.Identifier.Chevre ? ReserveTransactionFactory.ITransaction :
    ReserveTransactionFactory.ITransaction;

export type IResultAcceptedOffer = OrderFactory.IAcceptedOffer<OrderFactory.IReservation>;

/**
 * 承認アクション結果
 */
export interface IResult<T extends WebAPIFactory.Identifier> {
    /**
     * オファー分の金額
     */
    price: number;
    priceCurrency: PriceCurrency;
    /**
     * オファーに対して必要な金額
     * currencyを口座タイプとして扱う
     */
    amount: IMonetaryAmount[];
    /**
     * 外部リクエストエンドポイント
     */
    requestEndpoint?: string;
    /**
     * 外部サービスへのリクエスト
     */
    requestBody?: IRequestBody<T>;
    /**
     * 外部サービスからのレスポンス
     */
    responseBody: IResponseBody<T>;
    acceptedOffers?: IResultAcceptedOffer[];
}

export type IAcceptedOffer4chevre = ScreeningEventFactory.IAcceptedTicketOffer;

export type IAcceptedOfferWithoutDetail4chevre = ScreeningEventFactory.IAcceptedTicketOfferWithoutDetail;

export type IObjectWithoutDetail4chevre = ReserveTransactionFactory.IObjectWithoutDetail;

export type IAcceptedOffer4COA = ScreeningEventFactory.IAcceptedTicketOfferWithoutDetail & OfferFactory.seatReservation.IOfferWithDetails;

export type IAcceptedOfferWithoutDetail4COA = OfferFactory.seatReservation.IOffer;

export interface IObjectWithoutDetail4COA {
    acceptedOffer: IAcceptedOfferWithoutDetail4COA[];
    event: {
        id: string;
    };
}

export type IAcceptedOffer<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? IAcceptedOffer4COA :
    T extends WebAPIFactory.Identifier.Chevre ? IAcceptedOffer4chevre :
    any;

export type IAcceptedOfferWithoutDetail<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? IAcceptedOfferWithoutDetail4COA :
    T extends WebAPIFactory.Identifier.Chevre ? IAcceptedOfferWithoutDetail4chevre :
    any;

export type IObjectWithoutDetail<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? IObjectWithoutDetail4COA :
    T extends WebAPIFactory.Identifier.Chevre ? IObjectWithoutDetail4chevre :
    any;

// export type IPendingTransaction = ReserveTransactionFactory.ITransaction;
export interface IPendingTransaction {
    typeOf: AssetTransactionType.Reserve;
    transactionNumber: string;
}

/**
 * 承認アクション対象
 */
export type IObject<T extends WebAPIFactory.Identifier> = {
    typeOf: ObjectType;
    event?: ScreeningEventFactory.IEvent;
    acceptedOffer: IAcceptedOffer<T>[];
    /**
     * Chevre進行中取引
     */
    pendingTransaction?: IPendingTransaction;
} & IObjectWithoutDetail<T>;

export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}

/**
 * authorize action error interface
 */
export type IError = any;

/**
 * 座席予約承認アクションインターフェース
 */
export interface IAttributes<T extends WebAPIFactory.Identifier>
    extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult<T>> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject<T>;
    purpose: IPurpose;
    instrument?: IInstrument<T>;
}

export type IAction<T extends WebAPIFactory.Identifier> = ActionFactory.IAction<IAttributes<T>>;
