import { IParticipantAsPerson, IParticipantAsProject, IParticipantAsWebApplication } from './action';
import {
    IAmount as IMoneyTransferAmount,
    IPaymentCard as IPaymentCardAsMoneyTransferToLocation
} from './action/transfer/moneyTransfer';
import { ActionType } from './actionType';
import { AssetTransactionType } from './assetTransactionType';
import { ICreativeWork as IWebApplication } from './creativeWork/softwareApplication/webApplication';
import { ICustomer as ICustomerOrganization } from './customer';
import { EventType } from './eventType';
import { IMonetaryAmount } from './monetaryAmount';
import { IMultilingualString } from './multilingualString';
import { IOffer } from './offer';
import { OrderStatus } from './orderStatus';
import { OrganizationType } from './organizationType';
import { PaymentStatusType } from './paymentStatusType';
import { IIssuedThroughAsProduct, IPermit as IBasePermit } from './permit';
import { IPerson, IProfile } from './person';
import { PersonType } from './personType';
import { PlaceType } from './placeType';
import { PriceCurrency } from './priceCurrency';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from './priceSpecification/categoryCodeChargeSpecification';
import { IPriceSpecification as ICompoundPriceSpecification } from './priceSpecification/compoundPriceSpecification';
import { IPriceSpecification as IMovieTicketTypeChargeSpecification } from './priceSpecification/movieTicketTypeChargeSpecification';
import { IPriceSpecification as IUnitPriceOfferPriceSpecification } from './priceSpecification/unitPriceSpecification';
import { IProduct, ProductType } from './product';
import { IPropertyValue } from './propertyValue';
import { IProgramMembershipUsedSearchConditions, ITicket, ITicketType } from './reservation';
import * as BusReservationFactory from './reservation/busReservation';
import * as EventReservationFactory from './reservation/event';
import { ReservationType } from './reservationType';
import { ISeller as IBaseSeller } from './seller';
import { IPaymentMethodAsServiceOutput, PaymentServiceType } from './service/paymentService';
import { SortType } from './sortType';
// import { IUnitPriceOfferPriceSpecification } from './unitPriceOffer';

export interface IProject {
    typeOf: OrganizationType.Project;
    id: string;
}
export enum OrderType {
    Order = 'Order'
}
export interface IOrderPaymentMethodIssuedThrough {
    typeOf: PaymentServiceType;
    /**
     * 発行決済サービスID
     */
    id: string;
}
export interface ITotalPaymentDue extends Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'value'> {
    value: number;
}
// identifierを決済方法区分として保証(2023-08-28~)
export type IPaymentMethodOfInvoice = Pick<IPaymentMethodAsServiceOutput, 'amount'> & {
    /**
     * 決済方法区分コード
     */
    identifier: string;
};
/**
 * 請求
 */
export interface IReferencedInvoice {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    // typeOf: string; // @deprecated Use paymentMethod.identifier
    /**
     * 決済方法名称
     */
    name: string;
    /**
     * The name of the credit card or other method of payment for the order.
     * 追加(2023-08-13~)
     * 存在を保証(2023-08-28~)
     * OrderPaymentDueの状態では存在しない可能性あり
     */
    paymentMethod?: IPaymentMethodOfInvoice;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
    /**
     * 自動決済かどうか判定するために追加(2023-08-23~)
     */
    paymentStatus?: PaymentStatusType.PaymentAutomaticallyApplied | PaymentStatusType.PaymentDue;
    /**
     * The total amount due.
     */
    totalPaymentDue?: ITotalPaymentDue;
    /**
     * 追加特性
     */
    additionalProperty: IPropertyValue<string>[];
    issuedThrough: IOrderPaymentMethodIssuedThrough;
}
/**
 * ディスカウント
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
export type IWorkPerformed = Pick<
    EventReservationFactory.IOptimizedWorkPerformed,
    'typeOf' | 'id' | 'identifier' | 'name' | 'duration'
>;
export type ISuperEvent = Pick<
    EventReservationFactory.IOptimizedSuperEvent,
    'additionalProperty' | 'id'
    // | 'kanaName' // 廃止(2024-01-22~)
    | 'location'
    | 'name' | 'soundFormat' | 'typeOf'
    | 'videoFormat'
    // | 'description' // 廃止(2024-01-26~)
    | 'headline'
    // ↓COAのみ
    | 'identifier' | 'alternativeHeadline' | 'duration' | 'coaInfo'
> & {
    workPerformed: IWorkPerformed;
};
export type ITripAsReservationFor = BusReservationFactory.IReservationFor;
export type IEventAsReservationFor = Omit<EventReservationFactory.IReservationFor, 'superEvent'> & {
    superEvent: ISuperEvent;
};
export type IReservedTicket = Pick<
    ITicket,
    'typeOf' | 'ticketedSeat' |
    // 以下COAのみ
    'dateIssued' |
    'ticketNumber' |
    'ticketToken' |
    'coaTicketInfo' |
    'coaReserveAmount'
> & {
    ticketType: ITicketType;
};
export type IBusReservation = Pick<
    BusReservationFactory.IReservation,
    'additionalProperty' |
    'additionalTicketText' |
    'bookingTime' |
    'id' |
    'issuedThrough' |
    'programMembershipUsed' |
    // 不要なので廃止(2023-07-01~)
    // 'project' |
    'reservationNumber' |
    'typeOf'
> & {
    reservationFor: ITripAsReservationFor;
    reservedTicket: IReservedTicket;
};
export type IEventReservation = Pick<
    EventReservationFactory.IReservation,
    'additionalProperty' |
    'additionalTicketText' |
    'bookingTime' |
    'id' |
    'issuedThrough' |
    'programMembershipUsed' |
    // 不要なので廃止(2023-07-01~)
    // 'project' |
    'reservationNumber' |
    'typeOf'
> & {
    reservationFor: IEventAsReservationFor;
    reservedTicket: IReservedTicket;
};
export type IReservation = IBusReservation | IEventReservation;
export type IPermit = Pick<
    IBasePermit,
    'amount' | 'identifier' | 'name' | 'typeOf' | 'validFor'
// 不要なので廃止(2023-07-01~)
// | 'project'
> & {
    issuedThrough?: IIssuedThroughAsProduct; // 注文アイテムとして可能性があるのはプロダクトの発行するPermitのみ
};
export interface IMoneyTransferPendingTransaction {
    typeOf: AssetTransactionType.MoneyTransfer;
    /**
     * 資産取引番号
     */
    transactionNumber: string;
}
export type IMoneyTransferToLocation = Pick<IPaymentCardAsMoneyTransferToLocation, 'typeOf' | 'identifier' | 'issuedThrough'>;
export interface IMoneyTransfer {
    typeOf: ActionType.MoneyTransfer;
    /**
     * 金額
     */
    amount: IMoneyTransferAmount;
    description?: string;
    /**
     * 転送先
     */
    toLocation: IMoneyTransferToLocation;
    object: {
        /**
         * 入金処理の資産取引
         */
        pendingTransaction: IMoneyTransferPendingTransaction;
    };
    name?: string;
}
/**
 * 注文アイテム
 */
export type IItemOffered = IMoneyTransfer | IReservation | IPermit;
export type ICategoryChargePriceComponent = Omit<ICategoryCodeChargeSpecification, 'project'>;
export type IMovieTicketTypeChargePriceComponent = Omit<IMovieTicketTypeChargeSpecification, 'project'>;
export type IUnitPriceComponent = Pick<
    IUnitPriceOfferPriceSpecification,
    'accounting' | 'appliesToMovieTicket' | 'appliesToAddOn' | 'name' | 'price' | 'priceCurrency'
    | 'referenceQuantity' | 'typeOf' | 'valueAddedTaxIncluded'
>;
/**
 * 承認時に提供される価格仕様要素
 */
export type ITicketPriceComponent = ICategoryChargePriceComponent | IMovieTicketTypeChargePriceComponent | IUnitPriceComponent;
/**
 * 承認時に提供される価格仕様
 */
export type ITicketPriceSpecification = Omit<ICompoundPriceSpecification<ITicketPriceComponent>, 'project'>;
export type IOfferOptimized4acceptedOffer = Pick<
    IOffer,
    'typeOf' | 'id' | 'itemOffered' | 'offeredThrough' | 'name'
>;
/**
 * 受け入れオファー
 */
export interface IAcceptedOffer<T extends IItemOffered> extends IOfferOptimized4acceptedOffer {
    /**
     * オファー対象アイテム
     */
    itemOffered: T;
    priceSpecification?: ITicketPriceSpecification;
    /**
     * 資産取引を特定する番号(2024-01-30~)
     */
    serialNumber?: string;
}
/**
 * 販売者
 */
export interface ISeller extends Pick<IBaseSeller, 'typeOf' | 'additionalProperty'> {
    id: string;
    name: string;
}
/**
 * ウェブアプリケーションとしてのカスタマー
 */
export type IWebApplicationCustomer = Pick<IWebApplication, 'id' | 'typeOf'> & IProfile;
/**
 * 顧客組織としてのカスタマー
 */
export type IOrganizationCustomer = Pick<ICustomerOrganization, 'id' | 'typeOf'> & IProfile;
export type IPersonCustomer = Pick<IPerson, 'id' | 'typeOf' | 'memberOf'> & IProfile;
/**
 * カスタマー
 */
export type ICustomer = IPersonCustomer | IWebApplicationCustomer | IOrganizationCustomer;
export type IBroker = Pick<IPerson, 'id' | 'typeOf'>;
/**
 * 返品者
 */
export type IParticipantAsReturner = IParticipantAsPerson | IParticipantAsProject | IParticipantAsWebApplication;
export type IReturner = Pick<IParticipantAsReturner, 'id' | 'typeOf'>;
export type IIdentifier = IPropertyValue<string>[];
// export type ISimpleCustomer = Pick<ICustomer, 'id' | 'typeOf'>; // 廃止(2024-03-06~)
export type ISimpleSeller = Pick<ISeller, 'id' | 'typeOf' | 'name'>;
export interface ISimpleOrder {
    /**
     * object type
     */
    typeOf: OrderType;
    // customer: ISimpleCustomer; // 廃止(2024-03-06~)
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
    seller: ISimpleSeller;
}
export interface IReservationFor4EventServiceOrderedItem {
    location?: {
        branchCode: string;
        name?: IMultilingualString;
        typeOf: PlaceType.ScreeningRoom;
    };
    typeOf: EventType.ScreeningEvent;
    id: string;
    name?: IMultilingualString;
    startDate?: Date;
    endDate?: Date;
}
export interface IEventServiceAsOrderedItem {
    typeOf: ProductType.EventService;
    serviceOutput: {
        typeOf: ReservationType.EventReservation | ReservationType.ReservationPackage;
        reservationFor: IReservationFor4EventServiceOrderedItem;
    };
    serviceType?: EventReservationFactory.IServiceTypeOfIssuedThrough;
    id: string; // add(2024-03-06~)
}
export type IReservationFor4TransportationOrderedItem = Pick<ITripAsReservationFor, 'typeOf' | 'id' | 'arrivalTime' | 'departureTime'>;
export interface ITransportationAsOrderedItem {
    typeOf: ProductType.Transportation;
    serviceOutput: {
        typeOf: ReservationType.ReservationPackage;
        reservationFor: IReservationFor4TransportationOrderedItem;
    };
    serviceType?: EventReservationFactory.IServiceTypeOfIssuedThrough;
    id: string; // add(2024-03-06~)
}
export type IProductAsOrderedItem = Pick<IProduct, 'serviceType' | 'typeOf'> & {
    id: string;
};
/**
 * 注文アイテム
 * {@link https://schema.org/OrderItem}
 */
export interface IOrderedItem {
    typeOf: 'OrderItem';
    orderedItem: IProductAsOrderedItem | IEventServiceAsOrderedItem | ITransportationAsOrderedItem;
}
/**
 * 注文
 * {@link https://schema.org/Order}
 */
export interface IOrder extends Omit<ISimpleOrder, 'customer'> {
    id?: string; // 追加(2023-02-13~)
    project: IProject;
    additionalProperty?: IPropertyValue<string>[]; // 追加(2023-02-13~)
    /**
     * An entity that arranges for an exchange between a buyer and a seller.
     * In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.
     */
    broker?: IBroker;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber: string;
    customer: ICustomer;
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
    /**
     * 注文名称
     */
    name?: string;
    orderedItem?: IOrderedItem[];
    /**
     * OrderStatus	(recommended for confirmation cards/ Search Answers)
     * The current status of the order.
     */
    orderStatus: OrderStatus;
    /**
     * payment methods
     */
    paymentMethods: IReferencedInvoice[];
    previousOrderStatus?: OrderStatus;
    /**
     * Returner
     */
    returner?: IReturner;
    /**
     * The party taking the order (e.g. Amazon.com is a merchant for many sellers). Also accepts a string (e.g. "Amazon.com").
     */
    seller: ISeller;
    /**
     * URL	(recommended for confirmation cards/ Search Answers)
     * URL of the Order, typically a link to the merchant's website where the user can retrieve further details about an order.
     */
    url?: string;
}
/**
 * ソート条件
 */
export interface ISortOrder {
    orderDate?: SortType;
}
/**
 * 予約対象検索条件
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
    // typeOf?: string; // 不要なので廃止(2023-09-11~)
    /**
     * 販売者IDリスト
     */
    ids?: string[];
    id?: { $eq?: string };
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
     * 決済カードコード、ペイメントカード番号など
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
     * @deprecated Use paymentMethod.identifier
     */
    typeOfs?: string[];
    /**
     * 決済方法ID
     * 決済代行オーダーIDなど
     */
    paymentMethodIds?: string[];
    paymentMethod?: {
        /**
         * 決済方法区分コード
         */
        identifier?: { $in?: string[] }; // 追加(2023-09-11~)
    };
}
export interface IAcceptedOffersSearchConditions {
    $size?: number;
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
    serialNumber?: { $eq?: string };
}
/**
 * 注文検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    additionalProperty?: {
        $all?: IPropertyValue<string>[];
        $in?: IPropertyValue<string>[];
        $nin?: IPropertyValue<string>[];
        $elemMatch?: {
            name?: {
                /**
                 * 一致する名称の追加特性がひとつでも存在する
                 */
                $eq?: string;
            };
        };
    };
    broker?: {
        id?: { $eq?: string };
    };
    name?: {
        /**
         * 名称完全一致
         */
        $eq?: string;
        /**
         * 名称部分一致
         */
        $regex?: string;
    };
    /**
     * 販売者条件
     */
    seller?: ISellerSearchConditions;
    /**
     * 販売者条件(リクエストによるフィルター専用)
     */
    provider?: { id?: { $eq?: string } };
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
    orderedItem?: {
        $size?: number;
    };
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
