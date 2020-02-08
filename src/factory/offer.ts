import { ICategoryCode } from './categoryCode';
import ItemAvailability from './itemAvailability';
import { IMonetaryAmount } from './monetaryAmount';
import OfferType from './offerType';
import { PaymentMethodType } from './paymentMethodType';
import PriceCurrency from './priceCurrency';
import { IPriceSpecification } from './priceSpecification';
import PriceSpecificationType from './priceSpecificationType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IQuantitativeValue } from './quantitativeValue';
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
 * offer interface
 * An offer to transfer some rights to an item or to provide a service
 * — for example, an offer to sell tickets to an event, to rent the DVD of a movie,
 * to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 * @see https://schema.org/Offer
 */
export interface IOffer extends IThing {
    project: IProject;
    typeOf: OfferType;
    id?: string;
    /**
     * The payment method(s) accepted by seller for this offer.
     */
    acceptedPaymentMethod?: PaymentMethodType[];
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
     * 有効なムビチケ券種区分
     */
    eligibleMovieTicketType?: IEligibleCategoryCode[];
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
     * The date when the item becomes valid.
     */
    validFrom?: Date;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     */
    validThrough?: Date;
    /**
     * A property-value pair representing an additional characteristics of the entitity,
     * e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     */
    additionalProperty?: IPropertyValue<string>[];
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
    minPrice?: number;
    maxPrice?: number;
    referenceQuantity?: {
        value?: number;
    };
    accounting?: {
        minAccountsReceivable?: number;
        maxAccountsReceivable?: number;
    };
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { id?: { $eq?: string } };
    id?: { $eq?: string };
    identifier?: { $eq?: string };
    priceSpecification?: IPriceSpecificationSearchConditions;
    // category?: {
    //     ids?: string[];
    // };
    itemOffered?: {
        typeOf?: { $eq?: string };
    };
}
