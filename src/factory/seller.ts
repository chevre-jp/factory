// import { IOffer } from './offer';
import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { SortType } from './sortType';

/**
 * 利用可能決済インターフェース
 */
export interface IPaymentAccepted {
    /**
     * 決済方法区分
     */
    paymentMethodType: string;
}

// export type IMakesOffer = IOffer;

/**
 * サービス提供エリアインターフェース
 */
// export type IAreaServed = any;

export interface ISeller extends IOrganization {
    project: IProject;
    /**
     * The geographic area where a service or offered item is provided.
     */
    // areaServed?: IAreaServed[];
    branchCode?: string;
    /**
     * A pointer to products or services offered by the organization or person.
     */
    // makesOffer?: IMakesOffer[];
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
