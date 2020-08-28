import { IMerchantReturnPolicy } from './merchantReturnPolicy';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
import { PaymentMethodType } from './paymentMethodType';
// import SortType from './sortType';

/**
 * 場所インターフェース
 */
export interface ILocation {
    /**
     * スキーマタイプ
     */
    typeOf: string;
    /**
     * 枝番号
     */
    branchCode?: string;
    /**
     * 場所名称
     */
    name: IMultilingualString;
}

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
     * サイトID
     */
    siteId: string;
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

export interface ICreditCardPaymentAccepted {
    paymentMethodType: PaymentMethodType.CreditCard;
    /**
     * GMO情報
     */
    gmoInfo: IGMOInfo;
}

export interface IAccountPaymentAccepted {
    paymentMethodType: PaymentMethodType.Account;
    /**
     * 口座タイプ
     */
    accountType: string;
    /**
     * 口座番号
     */
    accountNumber: string;
}

export interface IMovieTicketPaymentAccepted {
    paymentMethodType: PaymentMethodType.MovieTicket | PaymentMethodType.MGTicket;
    movieTicketInfo: IMovieTicketInfo;
}

export interface ICommonPaymentAccepted {
    paymentMethodType: IAcceptedPaymentMethodType;
    identifier?: string;
}

/**
 * 利用可能決済インターフェース
 */
export type IPaymentAccepted =
    IAccountPaymentAccepted | ICreditCardPaymentAccepted | IMovieTicketPaymentAccepted | ICommonPaymentAccepted;

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
 * 組織検索条件インターフェース
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
