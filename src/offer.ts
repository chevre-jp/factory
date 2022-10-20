import { ActionType } from './actionType';
import { ICategoryCode } from './categoryCode';
import { ItemAvailability } from './itemAvailability';
import { IMonetaryAmount } from './monetaryAmount';
import { OfferType } from './offerType';
import { OrganizationType } from './organizationType';
import { IAmount as IPermitAmount, IDepositAmount, IPaymentAmount } from './permit';
import { PriceCurrency } from './priceCurrency';
import { IPriceSpecification } from './priceSpecification';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from './priceSpecification/categoryCodeChargeSpecification';
import { IPriceSpecification as ICompoundPriceSpecification } from './priceSpecification/compoundPriceSpecification';
import { IPriceSpecification as IMovieTicketTypeChargeSpecification } from './priceSpecification/movieTicketTypeChargeSpecification';
import { IAppliesToMovieTicket, IPriceSpecification as IUnitPriceSpecification } from './priceSpecification/unitPriceSpecification';
import { PriceSpecificationType } from './priceSpecificationType';
import { IPointAwardAmount, ProductType } from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IQuantitativeValue } from './quantitativeValue';
import * as WebAPIFactory from './service/webAPI';
import { SortType } from './sortType';
import { IThing } from './thing';
import { UnitCode } from './unitCode';

import {
    IOfferMerchantReturnPolicy,
    IOfferMerchantReturnPolicySearchConditions,
    IOfferMerchantReturnPolicySortOrder
} from './offer/merchantReturnPolicy';
import * as SeatReservationOfferFactory from './offer/seatReservation';

/**
 * オファーカテゴリー
 */
export interface ICategory {
    project: Pick<IProject, 'id' | 'typeOf'>;
    id?: string;
    codeValue?: string;
}

/**
 * アドオン
 */
export type IAddOn = IOffer;

export type IEligibleCategoryCode = Pick<ICategoryCode, 'project' | 'typeOf' | 'id' | 'codeValue' | 'inCodeSet'>;
export type IEligibleMonetaryAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'value'>;

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

export type IHasMerchantReturnPolicy = (Pick<IOfferMerchantReturnPolicy, 'typeOf' | 'id' | 'identifier' | 'name'> & {
    id: string;
    identifier: string;
})[];
export {
    IOfferMerchantReturnPolicy,
    IOfferMerchantReturnPolicySearchConditions,
    IOfferMerchantReturnPolicySortOrder
};
export interface IAvailableAtOrFrom {
    /**
     * アプリケーションID
     */
    id: string;
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
    availableAtOrFrom?: IAvailableAtOrFrom[];
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
    // eligibleRegion?: any;
    hasMerchantReturnPolicy?: IHasMerchantReturnPolicy;
    /**
     * The item being offered.
     */
    itemOffered?: any;
    // offeredBy?: any;
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
    validRateLimit?: IValidRateLimit;
    /**
     * A property-value pair representing an additional characteristics of the entitity,
     * e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     */
    additionalProperty?: IPropertyValue<string>[];
}
/**
 * 単価オファーの提供アイテム
 */
export interface IItemOffered {
    typeOf: ProductType;
    serviceOutput?: {
        /**
         * アウトプットタイプ
         * メンバーシップ区分、決済方法区分など
         * プロダクト側で定義されるはず
         */
        // typeOf?: string;
        /**
         * ペイメントカード初期金額
         */
        amount?: IPermitAmount;
        /**
         * ペイメントカード入金設定
         */
        depositAmount?: IDepositAmount;
        /**
         * ペイメントカード決済設定
         */
        paymentAmount?: IPaymentAmount;
    };
    /**
     * 特典
     */
    pointAward?: {
        /**
         * 付与金額
         */
        amount?: IPointAwardAmount;
        /**
         * 特典説明
         */
        description?: string;
        typeOf: ActionType.MoneyTransfer;
    };
}
/**
 * 単価オファーの価格仕様
 */
export type IUnitPriceOfferPriceSpecification = Omit<IUnitPriceSpecification, 'appliesToMovieTicket'> & {
    // Arrayに限定(2022-09-09~)
    appliesToMovieTicket?: IAppliesToMovieTicket[];
};
/**
 * 単価オファー
 */
export interface IUnitPriceOffer extends Omit<IOffer, 'seller'> {
    /**
     * コード
     */
    identifier: string;
    /**
     * 単価仕様
     */
    priceSpecification?: IUnitPriceOfferPriceSpecification;
    itemOffered?: IItemOffered;
}

/**
 * ソート条件
 */
export interface ISortOrder {
    'priceSpecification.price'?: SortType;
}

/**
 * 価格仕様検索条件
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
 * 検索条件
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
    eligibleMonetaryAmount?: {
        /**
         * 適用通貨区分
         */
        currency?: {
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
    hasMerchantReturnPolicy?: {
        id?: { $eq?: string };
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
/**
 * 承認時に提供される価格仕様要素
 */
export type ITicketPriceComponent = ICategoryCodeChargeSpecification
    | IMovieTicketTypeChargeSpecification
    | IUnitPriceOfferPriceSpecification;
// | IUnitPriceSpecification;
/**
 * 承認時に提供される価格仕様
 */
export type ITicketPriceSpecification = ICompoundPriceSpecification<ITicketPriceComponent>;
export namespace seatReservation {
    export import ICOATicketInfo = SeatReservationOfferFactory.ICOATicketInfo;
    export import ICOATicketInfoWithDetails = SeatReservationOfferFactory.ICOATicketInfoWithDetails;
    // tslint:disable-next-line:no-shadowed-variable
    export import ICOAOffer = SeatReservationOfferFactory.IOffer;
}
