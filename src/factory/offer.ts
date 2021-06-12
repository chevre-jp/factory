import { ICategoryCode } from './categoryCode';
import ItemAvailability from './itemAvailability';
import { IMonetaryAmount } from './monetaryAmount';
import * as SeatReservationOfferFactory from './offer/seatReservation';
import OfferType from './offerType';
import PriceCurrency from './priceCurrency';
import { IPriceSpecification } from './priceSpecification';
import { IPriceSpecification as IUnitPriceSpecification } from './priceSpecification/unitPriceSpecification';
import PriceSpecificationType from './priceSpecificationType';
import { ProductType } from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IQuantitativeValue } from './quantitativeValue';
import * as WebAPIFactory from './service/webAPI';
import SortType from './sortType';
import { IThing } from './thing';
import { UnitCode } from './unitCode';

/**
 * オファーカテゴリーインターフェース
 */
export interface ICategory {
    project: IProject;
    id?: string;
    codeValue?: string;
    name?: any;
}

/**
 * アドオンインターフェース
 */
export type IAddOn = IOffer;

export type IEligibleCategoryCode = ICategoryCode;
export type IEligibleMonetaryAmount = IMonetaryAmount;

/**
 * 適用サブ予約条件インターフェース
 */
export interface IEligibleSubReservation {
    /**
     * 席数
     */
    amountOfThisGood: number;
    typeOfGood: {
        /**
         * 適用座席タイプ
         */
        seatingType: string;
    };
}

/**
 * 販売者インターフェース
 */
export interface ISeller extends IThing {
    typeOf?: string;
    id?: string;
}

export type IOfferedThrough = WebAPIFactory.IService<WebAPIFactory.Identifier>;

/**
 * offer interface
 * An offer to transfer some rights to an item or to provide a service
 * — for example, an offer to sell tickets to an event, to rent the DVD of a movie,
 * to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 * {@link https://schema.org/Offer}
 */
export interface IOffer extends IThing {
    project: IProject;
    typeOf: OfferType;
    id?: string;
    /**
     * The payment method(s) accepted by seller for this offer.
     */
    acceptedPaymentMethod?: string[];
    /**
     * An additional offer that can only be obtained in combination with the first base offer
     * (e.g. supplements and extensions that are available for a surcharge).
     */
    addOn?: IAddOn[];
    // availableAddOn?: IOffer[];
    /**
     * The availability of this item—for example In stock, Out of stock, Pre-order, etc.
     */
    availability?: ItemAvailability | number;
    /**
     * The end of the availability of the product or service included in the offer.
     */
    availabilityEnds?: Date;
    /**
     * The beginning of the availability of the product or service included in the offer.
     */
    availabilityStarts?: Date;
    /**
     * The place(s) from which the offer can be obtained (e.g. store locations).
     */
    availableAtOrFrom?: any;
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     */
    category?: ICategory;
    /**
     * 有効な顧客タイプ
     */
    eligibleCustomerType?: any;
    /**
     * 有効なメンバーシップタイプ
     */
    eligibleMembershipType?: IEligibleCategoryCode[];
    /**
     * 有効な座席タイプ
     */
    eligibleSeatingType?: IEligibleCategoryCode[];
    /**
     * 有効な金額
     * 6ポイントで無料、などの設定に使用
     */
    eligibleMonetaryAmount?: IEligibleMonetaryAmount[];
    /**
     * 適用サブ予約条件
     */
    eligibleSubReservation?: IEligibleSubReservation[];
    /**
     * オファーが有効となる期間
     */
    eligibleDuration?: IQuantitativeValue<UnitCode.Sec>;
    /**
     * オファーの有効となる数
     */
    eligibleQuantity?: IQuantitativeValue<UnitCode>;
    /**
     * オファーが有効となる地域
     */
    eligibleRegion?: any;
    /**
     * The item being offered.
     */
    itemOffered?: any;
    offeredBy?: any;
    /**
     * オファー供給サービス
     */
    offeredThrough?: IOfferedThrough;
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     */
    price?: number;
    /**
     * The currency (in 3-letter ISO 4217 format) of the price or a price component,
     * when attached to PriceSpecification and its subtypes.
     */
    priceCurrency: PriceCurrency;
    /**
     * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
     */
    priceSpecification?: IPriceSpecification<PriceSpecificationType>;
    /**
     * An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider.
     */
    seller?: ISeller;
    /**
     * The payment method(s) unaccepted by seller for this offer.
     */
    unacceptedPaymentMethod?: string[];
    /**
     * The date when the item becomes valid.
     */
    validFrom?: Date;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     */
    validThrough?: Date;
    /**
     * レート制限
     */
    validRateLimit?: any;
    /**
     * A property-value pair representing an additional characteristics of the entitity,
     * e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     */
    additionalProperty?: IPropertyValue<string>[];
}

export type IBaseOffer = IOffer;

/**
 * 単価オファーの提供アイテムインターフェース
 */
export interface IItemOffered {
    project: IProject;
    typeOf: ProductType;
    serviceOutput?: {
        /**
         * アウトプットタイプ
         * メンバーシップ区分、決済方法区分など
         */
        typeOf?: string;
        /**
         * ペイメントカード初期金額
         */
        amount?: IMonetaryAmount;
        /**
         * ペイメントカード入金設定
         */
        depositAmount?: IMonetaryAmount;
        /**
         * ペイメントカード決済設定
         */
        paymentAmount?: IMonetaryAmount;
    };
    /**
     * 特典
     */
    pointAward?: {
        /**
         * 付与金額
         */
        amount?: IMonetaryAmount;
        /**
         * 特典説明
         */
        description?: string;
        /**
         * 口座種別
         */
        typeOf?: string;
    };
}

/**
 * 単価オファーインターフェース
 */
export interface IUnitPriceOffer extends IOffer {
    identifier: string;
    /**
     * 単価仕様
     */
    priceSpecification?: IUnitPriceSpecification;
    itemOffered?: IItemOffered;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    'priceSpecification.price'?: SortType;
}

/**
 * 価格仕様検索条件インターフェース
 */
export interface IPriceSpecificationSearchConditions {
    appliesToMovieTicket?: {
        /**
         * 適用決済カード区分
         */
        serviceType?: {
            $eq?: string;
        };
        serviceOutput?: {
            /**
             * 適用決済方法タイプ
             */
            typeOf?: {
                $eq?: string;
            };
        };
    };
    price?: {
        $gte?: number;
        $lte?: number;
    };
    referenceQuantity?: {
        value?: { $eq?: number };
    };
    accounting?: {
        accountsReceivable?: {
            $gte?: number;
            $lte?: number;
        };
        operatingRevenue?: {
            codeValue?: {
                $eq?: string;
                $in?: string[];
            };
        };
    };
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    addOn?: {
        itemOffered?: {
            /**
             * アドオンプロダクトID
             */
            id?: { $eq?: string };
        };
    };
    availableAtOrFrom?: {
        id?: {
            $eq?: string;
            $in?: string[];
        };
    };
    project?: { id?: { $eq?: string } };
    eligibleMembershipType?: {
        /**
         * 適用メンバーシップ区分
         */
        codeValue?: {
            $eq?: string;
        };
    };
    eligibleSeatingType?: {
        /**
         * 適用座席区分
         */
        codeValue?: {
            $eq?: string;
        };
    };
    id?: {
        $eq?: string;
        $in?: string[];
    };
    identifier?: {
        $eq?: string;
        $in?: string[];
        $regex?: string;
    };
    name?: {
        $regex?: string;
    };
    priceSpecification?: IPriceSpecificationSearchConditions;
    category?: {
        codeValue?: {
            $in?: string[];
        };
    };
    itemOffered?: {
        typeOf?: { $eq?: string };
    };
}

export namespace seatReservation {
    export import ICOATicketInfo = SeatReservationOfferFactory.ICOATicketInfo;
    export import ICOATicketInfoWithDetails = SeatReservationOfferFactory.ICOATicketInfoWithDetails;
    // tslint:disable-next-line:no-shadowed-variable
    export import IOffer = SeatReservationOfferFactory.IOffer;
    /**
     * 座席予約供給情報(詳細つき)インターフェース
     */
    export interface IOfferWithDetails extends IBaseOffer {
        /**
         * seat section
         */
        seatSection: string;
        /**
         * seat number
         */
        seatNumber: string;
        /**
         * ticket info
         */
        ticketInfo: ICOATicketInfoWithDetails;
    }
}
