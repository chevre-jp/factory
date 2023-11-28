import { IPointAward } from './action/transfer/moneyTransfer';
import { ItemAvailability } from './itemAvailability';
import { IAddOn, IName, IOffer } from './offer';
import { OfferType } from './offerType';
import { IAmount as IPermitAmount, IDepositAmount, IPaymentAmount } from './permit';
import { IPriceSpecification as IUnitPriceSpecification } from './priceSpecification/unitPriceSpecification';
import { IProduct, ProductType } from './product';
import { IQuantitativeValue } from './quantitativeValue';
import { SortType } from './sortType';
import { UnitCode } from './unitCode';
import {
    IOfferMerchantReturnPolicy,
    IOfferMerchantReturnPolicySearchConditions,
    IOfferMerchantReturnPolicySortOrder
} from './unitPriceOffer/merchantReturnPolicy';

export type IHasMerchantReturnPolicy = (Pick<IOfferMerchantReturnPolicy, 'typeOf' | 'id' | 'identifier' | 'name'> & {
    id: string;
    identifier: string;
})[];
export {
    IOfferMerchantReturnPolicy,
    IOfferMerchantReturnPolicySearchConditions,
    IOfferMerchantReturnPolicySortOrder
};
/**
 * 単価オファーの提供アイテム
 */
export interface IItemOffered {
    typeOf: ProductType;
    serviceOutput?: {
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
    pointAward?: Pick<IPointAward, 'amount' | 'description' | 'typeOf'>;
}
/**
 * 単価オファーの価格仕様
 */
export type IUnitPriceOfferPriceSpecification = Pick<
    IUnitPriceSpecification,
    'accounting'
    | 'appliesToMovieTicket'
    | 'eligibleQuantity' | 'eligibleTransactionVolume'
    | 'name' | 'price'
    | 'priceCurrency' | 'referenceQuantity' | 'typeOf' | 'valueAddedTaxIncluded'
>;
export type IAddOnItemOffered = Pick<IProduct, 'typeOf' | 'id' | 'name'>;
export interface IAddOn4unitPriceOffer extends Pick<IAddOn, 'typeOf' | 'priceCurrency'> {
    itemOffered: IAddOnItemOffered;
}
export interface ISettings {
    ignoreCategoryCodeChargeSpec?: boolean;
}
export interface IAdvanceBookingRequirement extends Pick<IQuantitativeValue<UnitCode.Sec>, 'typeOf' | 'minValue' | 'unitCode' | 'description'> {
}
export type IAvailability = ItemAvailability.InStock | ItemAvailability.OutOfStock;
/**
 * 単価オファー
 */
export interface IUnitPriceOffer extends Pick<
    IOffer,
    'acceptedPaymentMethod' // add(2023-11-15~)
    | 'project' | 'typeOf' | 'priceCurrency' | 'id' | 'identifier' | 'name' | 'description'
    | 'alternateName' | 'availability' | 'availableAtOrFrom' | 'itemOffered'
    | 'priceSpecification' | 'additionalProperty' | 'color' | 'category'
    | 'eligibleSeatingType' | 'eligibleMembershipType' | 'eligibleMonetaryAmount' | 'eligibleSubReservation'
    | 'validFrom' | 'validThrough' | 'validRateLimit'
> {
    /**
     * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
     * 事前予約要件(興行オファー承認日時とイベント開始日時の差)
     */
    advanceBookingRequirement?: IAdvanceBookingRequirement; // 追加(2023-08-10~)
    availability: IAvailability;
    /**
     * コード
     */
    identifier: string;
    name: IName;
    /**
     * 単価仕様
     */
    priceSpecification: IUnitPriceOfferPriceSpecification;
    itemOffered?: IItemOffered;
    addOn?: IAddOn4unitPriceOffer[];
    typeOf: OfferType.Offer;
    hasMerchantReturnPolicy?: IHasMerchantReturnPolicy;
    // settings追加(2023-01-26~)
    settings?: ISettings;
}
/**
 * ソート条件
 */
export interface ISortOrder {
    identifier?: SortType;
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
            /**
             * 適用決済カード区分が存在するかどうか
             */
            $exists?: boolean;
            $eq?: string;
        };
        serviceOutput?: {
            /**
             * 適用決済方法タイプ
             */
            typeOf?: {
                $eq?: string;
                $all?: string[];
                $nin?: string[];
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
            id?: {
                $eq?: string;
                $in?: string[];
            };
        };
    };
    availability?: { $eq?: IAvailability };
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
    additionalProperty?: {
        $all?: {
            $elemMatch: {
                name?: {
                    $eq?: string;
                };
                value?: {
                    $in?: string[];
                };
            };
        }[];
        $elemMatch?: {
            name?: {
                /**
                 * 一致する名称の追加特性がひとつでも存在する
                 */
                $eq?: string;
            };
            value?: {
                $eq?: string;
            };
        };
    };
    /**
     * 有効期間設定がない、あるいは、有効期間内
     */
    onlyValid?: boolean;
    parentOffer?: {
        /**
         * 集計オファーID
         */
        id?: { $in?: string[] };
    };
    includedInDataCatalog?: {
        /**
         * 記載カタログID
         */
        id?: { $in?: string[] };
    };
}
