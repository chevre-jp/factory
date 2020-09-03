import { IMerchantReturnPolicy } from './merchantReturnPolicy';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
import { PaymentMethodType } from './paymentMethodType';
import { IPlace } from './place';

export type ILocation = IPlace;

/**
 * 親組織インターフェース
 */
export type IParentOrganization = IOrganization;

export type IAcceptedPaymentMethodType = PaymentMethodType | string;

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
    paymentMethodType: IAcceptedPaymentMethodType;
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
    typeOf: OrganizationType;
    hasMerchantReturnPolicy?: IHasMerchantReturnPolicy;
    parentOrganization?: IParentOrganization;
    legalName?: IMultilingualString;
    location?: ILocation;
    /**
     * A pointer to products or services offered by the organization or person.
     */
    makesOffer?: IMakesOffer[];
    paymentAccepted?: IPaymentAccepted[];
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: IAreaServed[];
}

/**
 * ソート条件インターフェース
 */
// export interface ISortOrder {
//     'location.branchCode'?: SortType;
// }

export interface ILocationSearchConditions {
    typeOfs?: string[];
    branchCodes?: string[];
    name?: string;
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
    typeOfs?: OrganizationType[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 場所
     */
    location?: ILocationSearchConditions;
}
