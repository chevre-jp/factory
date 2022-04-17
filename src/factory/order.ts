import { IParticipant } from './action';
import { IPaymentCard } from './action/interact/confirm/moneyTransfer';
import { ActionType } from './actionType';
import { AssetTransactionType } from './assetTransactionType';
import { ICreativeWork as IWebApplication } from './creativeWork/softwareApplication/webApplication';
import { ICustomer as ICustomerOrganization } from './customer';
import { EventType } from './eventType';
import * as MonetaryAmountFactory from './monetaryAmount';
import { IMultilingualString } from './multilingualString';
import { IOffer } from './offer';
import { OrderStatus } from './orderStatus';
import { OrganizationType } from './organizationType';
import * as PermitFactory from './permit';
import { IPerson, IProfile } from './person';
import { PersonType } from './personType';
import { PlaceType } from './placeType';
import { PriceCurrency } from './priceCurrency';
import { IProduct, ProductType } from './product';
import { IPropertyValue } from './propertyValue';
import { IProgramMembershipUsedSearchConditions } from './reservation';
import * as EventReservationFactory from './reservation/event';
import { ReservationType } from './reservationType';
import { ISeller as ISellerOrganization } from './seller';
import { PaymentServiceType } from './service/paymentService';
import { IServiceType } from './serviceType';
import { SortType } from './sortType';
import { IThing } from './thing';

export interface IProject {
    typeOf: OrganizationType.Project;
    id: string;
}

export enum OrderType {
    Order = 'Order'
}

export type AvailablePaymentMethodType = string;

/**
 * 決済方法インターフェース
 */
export interface IPaymentMethod {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 決済方法タイプ
     */
    typeOf: AvailablePaymentMethodType;
    /**
     * 決済方法名称
     */
    name: string;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: MonetaryAmountFactory.IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty: IPropertyValue<string>[];
    issuedThrough: {
        typeOf: PaymentServiceType;
        /**
         * 発行決済サービスID
         */
        id: string;
    };
}

/**
 * 割引インターフェース
 */
export interface IDiscount {
    /**
     * 割引タイプ
     */
    typeOf: string;
    name: string;
    /**
     * Any discount applied.
     */
    discount: number;
    /**
     * Code used to redeem a discount.
     */
    discountCode: string;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the discount.
     */
    discountCurrency: string;
}

export type IReservation = EventReservationFactory.IReservation;
export type IPermit = PermitFactory.IPermit;
export interface IMoneyTransferPendingTransaction {
    typeOf: AssetTransactionType.MoneyTransfer;
    transactionNumber: string;
}
export interface IMoneyTransfer {
    typeOf: ActionType.MoneyTransfer;
    /**
     * 金額
     */
    amount: MonetaryAmountFactory.IMonetaryAmount;
    description?: string;
    /**
     * 転送先
     */
    toLocation: IPaymentCard;
    object?: {
        pendingTransaction?: IMoneyTransferPendingTransaction;
    };
    name?: string;
}

/**
 * 注文アイテムインターフェース
 */
export type IItemOffered = IMoneyTransfer | IReservation | IPermit;

/**
 * オファーインターフェース
 */
export interface IAcceptedOffer<T extends IItemOffered> extends IOffer {
    /**
     * オファー対象アイテム
     */
    itemOffered: T;
    /**
     * 販売者
     */
    seller: ISeller;
}

/**
 * 販売者
 */
export type ISeller = ISellerOrganization;

/**
 * ウェブアプリケーションとしてのカスタマー
 */
export type IWebApplicationCustomer = IWebApplication & IProfile;
/**
 * 顧客組織としてのカスタマー
 */
export type IOrganizationCustomer = ICustomerOrganization & IProfile;

/**
 * カスタマー
 */
export type ICustomer = IPerson | IWebApplicationCustomer | IOrganizationCustomer;

export type IBroker = IPerson;

/**
 * 返品者
 */
export type IReturner = IParticipant;

export type IIdentifier = IPropertyValue<string>[];

export interface ISimpleOrder extends IThing {
    project: IProject;
    /**
     * object type
     */
    typeOf: OrderType;
    /**
     * The party taking the order (e.g. Amazon.com is a merchant for many sellers). Also accepts a string (e.g. "Amazon.com").
     */
    seller: ISeller;
    /**
     * Party placing the order.
     */
    customer: ICustomer;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber: string;
    /**
     * The merchant- specific identifier for the transaction.
     */
    orderNumber: string;
    /**
     * The total price of the entire transaction.
     */
    price: number;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the order price.
     */
    priceCurrency: PriceCurrency;
    /**
     * Date order was placed.
     */
    orderDate: Date;
}

export interface IReservationFor4OrderedItem {
    location?: {
        branchCode: string;
        name?: IMultilingualString;
        project: IProject;
        typeOf: PlaceType.ScreeningRoom;
    };
    project: IProject;
    typeOf: EventType.ScreeningEvent;
    id: string;
    name?: IMultilingualString;
    startDate?: Date;
    endDate?: Date;
}
export interface IEventServiceAsOrderedItem {
    project: IProject;
    typeOf: ProductType.EventService;
    serviceOutput: {
        typeOf: ReservationType.EventReservation;
        reservationFor: IReservationFor4OrderedItem;
    };
    serviceType?: IServiceType;
}
/**
 * 注文アイテム
 * {@link https://schema.org/OrderItem}
 */
export interface IOrderedItem {
    typeOf: 'OrderItem';
    orderedItem: IProduct | IEventServiceAsOrderedItem;
}

/**
 * 注文インターフェース
 * {@link https://schema.org/Order}
 */
export interface IOrder extends ISimpleOrder {
    /**
     * Offer
     * The offers included in the order.Also accepts an array of objects.
     */
    acceptedOffers: IAcceptedOffer<IItemOffered>[];
    /**
     * An entity that arranges for an exchange between a buyer and a seller.
     * In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.
     */
    broker?: IBroker;
    /**
     * Date order was returned.
     */
    dateReturned?: Date;
    /**
     * discount infos
     */
    discounts: IDiscount[];
    /**
     * The identifier property represents any kind of identifier for any kind of Thing
     */
    identifier?: IIdentifier;
    /**
     * Was the offer accepted as a gift for someone other than the buyer.
     */
    isGift?: boolean;
    orderedItem?: IOrderedItem[];
    /**
     * OrderStatus	(recommended for confirmation cards/ Search Answers)
     * The current status of the order.
     */
    orderStatus: OrderStatus;
    /**
     * payment methods
     */
    paymentMethods: IPaymentMethod[];
    /**
     * Returner
     */
    returner?: IReturner;
    /**
     * URL	(recommended for confirmation cards/ Search Answers)
     * URL of the Order, typically a link to the merchant's website where the user can retrieve further details about an order.
     */
    url?: string;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    orderDate?: SortType;
}

/**
 * 予約対象検索条件インターフェース
 */
export interface IReservationForSearchConditions {
    typeOfs?: EventType[];
    ids?: string[];
    /**
     * イベント名称
     */
    name?: string;
    /**
     * 開催中 from
     */
    inSessionFrom?: Date;
    /**
     * 開催中 through
     */
    inSessionThrough?: Date;
    /**
     * 開始日時 from
     */
    startFrom?: Date;
    /**
     * 開始日時 through
     */
    startThrough?: Date;
    /**
     * イベント開催場所
     */
    location?: {
        branchCodes?: string[];
    };
    /**
     * 親イベント情報
     */
    superEvent?: {
        ids?: string[];
        location?: {
            /**
             * 親イベントが実施される場所の枝番号
             */
            branchCodes?: string[];
        };
        workPerformed?: {
            /**
             * コンテンツコードリスト
             */
            identifiers?: string[];
        };
    };
}

export interface ISellerSearchConditions {
    typeOf?: string;
    /**
     * 販売者IDリスト
     */
    ids?: string[];
}

export interface ICustomerSearchConditions {
    typeOf?: PersonType;
    ids?: string[];
    identifiers?: IIdentifier;
    identifier?: {
        $all?: IIdentifier;
        $in?: IIdentifier;
    };
    additionalProperty?: {
        $all?: IIdentifier;
        $in?: IIdentifier;
    };
    memberOf?: {
        membershipNumber?: {
            $eq?: string;
            $in?: string[];
        };
    };
    givenName?: string | {
        $eq?: string;
        $regex?: string;
    };
    familyName?: string | {
        $eq?: string;
        $regex?: string;
    };
    email?: string | {
        $eq?: string;
        $regex?: string;
    };
    telephone?: string | {
        $eq?: string;
        $regex?: string;
    };
}

export interface IPaymentMethodsSearchConditions {
    /**
     * 決済アカウントID
     * ムビチケ購入番号、ペイメントカード番号など
     */
    accountIds?: string[];
    /**
     * 追加特性
     */
    additionalProperty?: {
        /**
         * すべてに一致する
         */
        $all?: IIdentifier;
        /**
         * どれかに一致する
         */
        $in?: IIdentifier;
    };
    /**
     * 決済方法区分コード
     */
    typeOfs?: AvailablePaymentMethodType[];
    /**
     * 決済方法ID
     * 決済代行オーダーIDなど
     */
    paymentMethodIds?: string[];
}

export interface IAcceptedOffersSearchConditions {
    itemOffered?: {
        /**
         * アイテムタイプ
         * 現状、EventReservation or Permit
         */
        typeOf?: { $in?: string[] };
        /**
         * アイテムコード
         * メンバーシップコード、ペイメントカード番号など
         */
        identifier?: { $in?: string[] };
        issuedThrough?: {
            /**
             * 発行サービスID
             */
            id?: { $in?: string[] };
            /**
             * 発行サービスタイプ
             */
            typeOf?: { $eq?: ProductType };
        };
        /**
         * アイテムID
         * 予約IDなど
         */
        ids?: string[];
        reservationFor?: IReservationForSearchConditions;
        /**
         * 予約番号
         */
        reservationNumbers?: string[];
        /**
         * 使用メンバーシップ
         */
        programMembershipUsed?: IProgramMembershipUsedSearchConditions;
    };
}

/**
 * 注文検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    broker?: {
        id?: { $eq?: string };
    };
    /**
     * 販売者条件
     */
    seller?: ISellerSearchConditions;
    /**
     * 顧客条件
     */
    customer?: ICustomerSearchConditions;
    /**
     * 識別子条件
     */
    identifier?: {
        $all?: IIdentifier;
        $in?: IIdentifier;
    };
    /**
     * 注文番号リスト
     */
    orderNumbers?: string[];
    /**
     * 注文ステータスリスト
     */
    orderStatuses?: OrderStatus[];
    /**
     * 注文日時
     */
    orderDate?: {
        /**
         * 注文日時(まで)
         */
        $gte?: Date;
        /**
         * 注文日時(から)
         */
        $lte?: Date;
    };
    /**
     * 注文日時(から)
     * @deprecated Use orderDate.$gte
     */
    orderDateFrom?: Date;
    /**
     * 注文日時(まで)
     * @deprecated Use orderDate.$lte
     */
    orderDateThrough?: Date;
    /**
     * 確認番号リスト
     */
    confirmationNumbers?: string[];
    /**
     * 決済方法
     */
    paymentMethods?: IPaymentMethodsSearchConditions;
    /**
     * 注文アイテム条件
     */
    acceptedOffers?: IAcceptedOffersSearchConditions;
    price?: {
        $gte?: number;
        $lte?: number;
    };
}
