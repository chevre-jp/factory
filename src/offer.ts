import { ICategoryCode } from './categoryCode';
import { ItemAvailability } from './itemAvailability';
import { IMonetaryAmount } from './monetaryAmount';
import { IMultilingualString } from './multilingualString';
import { OfferType } from './offerType';
import { OrganizationType } from './organizationType';
import { PriceCurrency } from './priceCurrency';
import { IPriceSpecification } from './priceSpecification';
import { PriceSpecificationType } from './priceSpecificationType';
import { IProduct } from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IQuantitativeValue } from './quantitativeValue';
import * as WebAPIFactory from './service/webAPI';
import { IThing } from './thing';
import { UnitCode } from './unitCode';

/**
 * オファーカテゴリー
 */
export interface ICategory {
    // 廃止(2023-02-24~)
    // project: Pick<IProject, 'id' | 'typeOf'>;
    id?: string;
    codeValue?: string;
}
// 最適化(2023-02-24~)
// export type IEligibleCategoryCode = Pick<ICategoryCode, 'project' | 'typeOf' | 'id' | 'codeValue' | 'inCodeSet'>;
export type IEligibleCategoryCode = Pick<ICategoryCode, 'typeOf' | 'id' | 'codeValue' | 'inCodeSet'>;
export type IEligibleMonetaryAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'value'> & {
    value: number;
};
/**
 * 適用サブ予約条件
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
 * 販売者
 */
export interface ISeller {
    typeOf?: OrganizationType.Corporation;
    id?: string;
}
export type IOfferedThrough = WebAPIFactory.IService<WebAPIFactory.Identifier>;
/**
 * レート制限
 * どのスコープで何秒に1席までか
 */
export interface IValidRateLimit {
    scope: string;
    unitInSeconds: number;
}
export interface IAvailableAtOrFrom {
    /**
     * アプリケーションID
     */
    id: string;
}
export type IItemOffered4addOn = Pick<IProduct, 'description' | 'id' | 'name' | 'productID' | 'typeOf'>;
/**
 * アドオン
 */
export interface IAddOn {
    /**
     * コード
     */
    identifier: string;
    typeOf: OfferType.Offer;
    id: string;
    // availableAtOrFrom?: IAvailableAtOrFrom[];
    itemOffered: IItemOffered4addOn;
    priceCurrency: PriceCurrency;
    priceSpecification?: IPriceSpecification<PriceSpecificationType>;
    validFrom?: Date;
    validThrough?: Date;
}
export type IEligibleQuantity = Pick<IQuantitativeValue<UnitCode.C62>, 'maxValue' | 'typeOf' | 'unitCode'>;
export type IName = IMultilingualString;
/**
 * 利用可能決済方法
 */
export interface IAcceptedPaymentMethod {
    /**
     * 決済方法区分コード
     */
    identifier: string;
}
/**
 * offer interface
 * An offer to transfer some rights to an item or to provide a service
 * — for example, an offer to sell tickets to an event, to rent the DVD of a movie,
 * to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 * {@link https://schema.org/Offer}
 */
export interface IOffer extends Pick<IThing, 'name' | 'description' | 'alternateName' | 'color' | 'identifier'> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: OfferType;
    id?: string;
    /**
     * The payment method(s) accepted by seller for this offer.
     * 対応決済方法区分
     */
    acceptedPaymentMethod?: IAcceptedPaymentMethod[];
    /**
     * An additional offer that can only be obtained in combination with the first base offer
     * (e.g. supplements and extensions that are available for a surcharge).
     */
    addOn?: IAddOn[];
    /**
     * The availability of this item—for example In stock, Out of stock, Pre-order, etc.
     */
    availability?: ItemAvailability;
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
     * 利用可能アプリケーション
     */
    availableAtOrFrom?: IAvailableAtOrFrom[];
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     * カテゴリー
     */
    category?: ICategory;
    // eligibleCustomerType?: any;
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
     * 適用数量
     */
    eligibleQuantity?: IEligibleQuantity;
    /**
     * The item being offered.
     */
    itemOffered?: any;
    name?: IName;
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
     * 有効期間(from)
     */
    validFrom?: Date;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     * 有効期間(through)
     */
    validThrough?: Date;
    /**
     * レート制限
     */
    validRateLimit?: IValidRateLimit;
    /**
     * A property-value pair representing an additional characteristics of the entitity,
     * e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     */
    additionalProperty?: IPropertyValue<string>[];
}
