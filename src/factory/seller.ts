import { IMerchantReturnPolicy } from './merchantReturnPolicy';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
import { IPlace } from './place';
import { IPropertyValue } from './propertyValue';
import SortType from './sortType';

export type ILocation = IPlace;

/**
 * 親組織インターフェース
 */
export type IParentOrganization = IOrganization;

/**
 * GMOショップ情報インターフェース
 */
export interface IGMOInfo {
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパス
     */
    shopPass?: string;
}

/**
 * ムビチケショップ情報インターフェース
 */
export interface IMovieTicketInfo {
    /**
     * ムビチケ興行会社コード
     */
    kgygishCd: string;
    /**
     * ムビチケサイトコード
     */
    stCd: string;
}

/**
 * 利用可能決済インターフェース
 */
export interface IPaymentAccepted {
    paymentMethodType: string;
    identifier?: string;
    /**
     * 口座タイプ
     */
    accountType?: string;
    /**
     * 口座番号
     */
    accountNumber?: string;
    /**
     * GMO情報
     */
    gmoInfo?: IGMOInfo;
    movieTicketInfo?: IMovieTicketInfo;
}

export type IMakesOffer = IOffer;

/**
 * サービス提供エリアインターフェース
 */
export type IAreaServed = any;

export type IHasMerchantReturnPolicy = IMerchantReturnPolicy[];

export interface ISeller extends IOrganization {
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: IAreaServed[];
    branchCode?: string;
    hasMerchantReturnPolicy?: IHasMerchantReturnPolicy;
    legalName?: IMultilingualString;
    location?: ILocation;
    /**
     * A pointer to products or services offered by the organization or person.
     */
    makesOffer?: IMakesOffer[];
    parentOrganization?: IParentOrganization;
    paymentAccepted?: IPaymentAccepted[];
    typeOf: OrganizationType;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    branchCode?: SortType;
}

/**
 * 販売者検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: any;
    project?: {
        id?: { $eq?: string };
        ids?: string[];
    };
    branchCode?: {
        $eq?: string;
        $regex?: string;
    };
    /**
     * 名称
     */
    name?: string;
    /**
     * 追加特性
     */
    additionalProperty?: {
        $all?: IPropertyValue<string>[];
        $in?: IPropertyValue<string>[];
        $nin?: IPropertyValue<string>[];
        $elemMatch?: any;
    };
}
