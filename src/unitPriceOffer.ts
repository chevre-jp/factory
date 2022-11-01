import { ActionType } from './actionType';
import { IAddOn, IOffer } from './offer';
import { OfferType } from './offerType';
import { IAmount as IPermitAmount, IDepositAmount, IPaymentAmount } from './permit';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from './priceSpecification/categoryCodeChargeSpecification';
import { IPriceSpecification as ICompoundPriceSpecification } from './priceSpecification/compoundPriceSpecification';
import { IPriceSpecification as IMovieTicketTypeChargeSpecification } from './priceSpecification/movieTicketTypeChargeSpecification';
import { IAppliesToMovieTicket, IPriceSpecification as IUnitPriceSpecification } from './priceSpecification/unitPriceSpecification';
import { IPointAwardAmount, IProduct, ProductType } from './product';
import { SortType } from './sortType';
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
export interface IAddOnItemOffered extends Pick<IProduct, 'typeOf' | 'id' | 'name'> {
}
export interface IAddOn4unitPriceOffer extends Pick<IAddOn, 'project' | 'typeOf' | 'priceCurrency'> {
    itemOffered: IAddOnItemOffered;
}
/**
 * 単価オファー
 */
export interface IUnitPriceOffer extends Pick<
    IOffer,
    'project' | 'typeOf' | 'priceCurrency' | 'id' | 'identifier' | 'name' | 'description'
    | 'alternateName' | 'availability' | 'availableAtOrFrom' | 'itemOffered' | 'priceSpecification' | 'addOn'
    | 'additionalProperty' | 'color' | 'category'
    | 'eligibleSeatingType' | 'eligibleMembershipType' | 'eligibleMonetaryAmount' | 'eligibleSubReservation'
    | 'validFrom' | 'validThrough' | 'validRateLimit'
> {
    /**
     * コード
     */
    identifier: string;
    /**
     * 単価仕様
     */
    priceSpecification?: IUnitPriceOfferPriceSpecification;
    itemOffered?: IItemOffered;
    addOn?: IAddOn4unitPriceOffer[];
    typeOf: OfferType.Offer;
    hasMerchantReturnPolicy?: IHasMerchantReturnPolicy;
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
// TODO 不要な属性をOmit(2022-11-02~)
export type ITicketPriceComponent =
    ICategoryCodeChargeSpecification
    | IMovieTicketTypeChargeSpecification
    | IUnitPriceOfferPriceSpecification;
/**
 * 承認時に提供される価格仕様
 */
// TODO 不要な属性をOmit(2022-11-02~)
export type ITicketPriceSpecification = Omit<ICompoundPriceSpecification<ITicketPriceComponent>, 'project'>;