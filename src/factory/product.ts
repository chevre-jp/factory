import { ActionType } from './actionType';
import { ICategoryCode } from './categoryCode';
import { IMonetaryAmount } from './monetaryAmount';
import { IOffer } from './offer';
import { IPermit } from './permit';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IQuantitativeValue } from './quantitativeValue';
// import { IServiceType } from './serviceType';
import { SortType } from './sortType';
import { IThing } from './thing';

/**
 * プロダクトタイプ
 */
export enum ProductType {
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
    /**
     * アドオン
     */
    Product = 'Product'
}

export interface IHasOfferCatalog {
    typeOf: 'OfferCatalog';
    id?: string;
}
export type IServiceOutput = IPermit & {
    membershipPointsEarned?: IQuantitativeValue<any>;
    automaticRenewal?: boolean;
};

/**
 * ポイント特典インターフェース
 */
export interface IPointAward {
    typeOf: ActionType.MoneyTransfer;
    amount?: IMonetaryAmount;
    /**
     * 特典付与先
     */
    toLocation?: {
        /**
         * Permit
         */
        typeOf?: string;
        /**
         * カード番号
         */
        identifier: string;
        issuedThrough: {
            /**
             * カード発行サービスID
             */
            id: string;
        };
    };
    description?: string;
    recipient?: any;
    purpose?: { identifier?: string };
}

/**
 * 外部サービス認証情報
 */
export interface ICredentials {
    siteId?: string;
    sitePass?: string;
    authorizeServerDomain?: string;
    clientId?: string;
    clientSecret?: string;
}

export interface IAvailableChannel {
    typeOf: 'ServiceChannel';
    serviceUrl?: string;
    credentials?: ICredentials;
}
export type IServiceType = Pick<ICategoryCode, 'codeValue' | 'inCodeSet' | 'project' | 'typeOf'>;
/**
 * プロダクトインターフェース
 * {@link https://schema.org/Product}
 */
export interface IProduct extends Pick<IThing, 'name' | 'description'> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: ProductType;
    id?: string;
    availableChannel?: IAvailableChannel;
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
    productID: string;
    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     */
    serviceOutput?: IServiceOutput;
    /**
     * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
     */
    serviceType?: IServiceType;
    additionalProperty?: IPropertyValue<string>[];
}

export interface ISortOrder {
    productID?: SortType;
}

export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { id?: { $eq?: string } };
    hasOfferCatalog?: {
        id?: {
            $eq?: string;
        };
    };
    id?: { $eq?: string };
    name?: {
        $regex?: string;
    };
    productID?: {
        $eq?: string;
        $in?: string[];
    };
    typeOf?: {
        $eq?: string;
        $in?: string[];
    };
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
        amount?: {
            currency?: { $eq?: string };
        };
    };
    serviceType?: {
        codeValue?: { $eq?: string };
    };
}

/**
 * サービスアウトプット検索条件
 */
export interface IServiceOutputSearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { id?: { $eq?: string } };
    accessCode?: { $eq?: string };
    id?: { $eq?: string };
    identifier?: {
        $eq?: string;
        $in?: string[];
    };
    issuedBy?: {
        id?: { $eq?: string };
    };
    issuedThrough?: {
        id?: { $eq?: string };
        serviceType?: {
            codeValue?: { $eq?: string };
        };
        typeOf?: { $eq?: ProductType };
    };
    typeOf?: { $eq?: string };
}
