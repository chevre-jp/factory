import { IMerchantReturnPolicy } from './merchantReturnPolicy';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import { OrganizationType } from './organizationType';
import { PaymentMethodType } from './paymentMethodType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import SortType from './sortType';
import { IThing } from './thing';

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
export interface IParentOrganization {
    /**
     * スキーマタイプ
     */
    typeOf: OrganizationType;
    /**
     * 組織識別子
     */
    identifier?: any;
    /**
     * 組織名称
     */
    name: IMultilingualString;
    telephone?: string;
}

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

export interface ICashPaymentAccepted {
    paymentMethodType: PaymentMethodType.Cash;
}

export interface ICreditCardPaymentAccepted {
    paymentMethodType: PaymentMethodType.CreditCard;
    /**
     * GMO情報
     */
    gmoInfo: IGMOInfo;
}

export interface IEMoneyPaymentAccepted {
    paymentMethodType: PaymentMethodType.EMoney;
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
export type IPaymentAccepted<T extends IAcceptedPaymentMethodType> =
    T extends PaymentMethodType.Account ? IAccountPaymentAccepted :
    T extends PaymentMethodType.Cash ? ICashPaymentAccepted :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentAccepted :
    T extends PaymentMethodType.EMoney ? IEMoneyPaymentAccepted :
    T extends PaymentMethodType.MGTicket ? IMovieTicketPaymentAccepted :
    T extends PaymentMethodType.MovieTicket ? IMovieTicketPaymentAccepted :
    ICommonPaymentAccepted;

export type IMakesOffer = IOffer;

/**
 * サービス提供エリアインターフェース
 */
export type IAreaServed = any;

export type IHasMerchantReturnPolicy = IMerchantReturnPolicy[];

export interface IAttributes<T extends OrganizationType> extends IThing {
    project: IProject;
    typeOf: T;
    hasMerchantReturnPolicy?: IHasMerchantReturnPolicy;
    parentOrganization?: IParentOrganization;
    legalName?: IMultilingualString;
    location?: ILocation;
    /**
     * A pointer to products or services offered by the organization or person.
     */
    makesOffer?: IMakesOffer[];
    telephone?: string;
    paymentAccepted?: IPaymentAccepted<IAcceptedPaymentMethodType>[];
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: IAreaServed[];
    /**
     * A property-value pair representing an additional characteristics of the entitity,
     * e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     */
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * 組織インターフェース
 */
export type IOrganization<T extends IAttributes<OrganizationType>> = T & {
    id: string;
};

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    'location.branchCode'?: SortType;
}

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
    sort?: ISortOrder;
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
