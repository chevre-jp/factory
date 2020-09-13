import { IMonetaryAmount } from './monetaryAmount';
import { IOffer } from './offer';
import { IPermit } from './permit';
import { IProject } from './project';
import SortType from './sortType';
import { IThing } from './thing';

/**
 * プロダクトタイプ
 */
export enum ProductType {
    /**
     * 口座
     */
    Account = 'Account',
    /**
     * イベントサービス
     */
    EventService = 'EventService',
    /**
     * メンバーシップサービス
     */
    MembershipService = 'MembershipService',
    /**
     * ペイメントカード
     */
    PaymentCard = 'PaymentCard',
    // PointCard = 'PointCard',
    /**
     * アドオン
     */
    Product = 'Product'
}

export interface IHasOfferCatalog {
    typeOf: 'OfferCatalog';
    id?: string;
}

export type IServiceOutput = IPermit;

/**
 * ポイント特典インターフェース
 */
export interface IPointAward {
    typeOf: 'MoneyTransfer';
    amount?: IMonetaryAmount;
    toLocation?: any;
}

/**
 * プロダクトインターフェース
 * @see https://schema.org/Product
 */
export interface IProduct extends IThing {
    project: IProject;
    typeOf: ProductType;
    id?: string;
    /**
     * Indicates an OfferCatalog listing for this Organization, Person, or Service.
     */
    hasOfferCatalog?: IHasOfferCatalog;
    /**
     * An offer to provide this item
     */
    offers?: IOffer[];
    pointAward?: IPointAward;
    /**
     * The product identifier, such as ISBN. For example: meta itemprop="productID" content="isbn:123-456-789".
     */
    productID?: string;
    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     */
    serviceOutput?: IServiceOutput;
    /**
     * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
     */
    serviceType?: any;
}

export interface ISortOrder {
    productID?: SortType;
}

export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { id?: { $eq?: string } };
    id?: { $eq?: string };
    productID?: {
        $eq?: string;
        $in?: string[];
    };
    typeOf?: { $eq?: string };
    offers?: {
        $elemMatch?: {
            availabilityEnds?: {
                $gte?: Date;
                $lte?: Date;
            };
            availabilityStarts?: {
                $gte?: Date;
                $lte?: Date;
            };
            validFrom?: {
                $gte?: Date;
                $lte?: Date;
            };
            validThrough?: {
                $gte?: Date;
                $lte?: Date;
            };
            'seller.id'?: {
                $in?: string[];
            };
        };
    };
    serviceOutput?: {
        typeOf?: { $eq?: string };
    };
}

export interface IServiceOutputSearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { id?: { $eq?: string } };
    id?: { $eq?: string };
    identifier?: { $eq?: string };
    typeOf?: { $eq?: string };
}
