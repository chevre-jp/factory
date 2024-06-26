import { IBusinessEntityType } from './businessEntityType';
import { IMerchantReturnPolicy, IRestockingFee } from './merchantReturnPolicy';
import { IMultilingualString } from './multilingualString';
import { IAvailableAtOrFrom, IOffer } from './offer';
import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IQuantitativeValue } from './quantitativeValue';
import { SortType } from './sortType';
import { UnitCode } from './unitCode';

export type ISellerMerchantReturnPolicy = Pick<
    IMerchantReturnPolicy,
    'itemCondition' | 'typeOf' | 'merchantReturnDays' | 'restockingFee' | 'url' | 'applicablePaymentMethod'
> & {
    restockingFee: IRestockingFee;
    /**
     * ポリシー識別子(プロジェクト自動生成)
     */
    identifier?: string;
};
export type IHasMerchantReturnPolicy = ISellerMerchantReturnPolicy[];
/**
 * 利用可能決済
 */
export interface IPaymentAccepted {
    /**
     * 決済方法区分
     */
    paymentMethodType: string;
}
export type IEligibleTransactionDuration = Pick<IQuantitativeValue<UnitCode.Sec>, 'maxValue' | 'typeOf' | 'unitCode'>;
export interface IMakesOffer extends Pick<
    IOffer,
    'typeOf' | 'availableAtOrFrom'
> {
    availableAtOrFrom: IAvailableAtOrFrom[]; // required
    /**
     * 適用カスタマータイプ
     */
    eligibleCustomerType?: IBusinessEntityType[]; // add eligibleCustomerType(2023-11-18~)
    /**
     * 適用取引期間
     */
    eligibleTransactionDuration: IEligibleTransactionDuration; // required
    // eligibleMembership?: IEligibleMembership;
}
export interface ISeller extends Pick<
    IOrganization,
    'typeOf' | 'id' | 'location' | 'telephone' | 'additionalProperty' | 'name' | 'url'
> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    /**
     * The geographic area where a service or offered item is provided.
     */
    // areaServed?: IAreaServed[];
    branchCode: string;
    /**
     * Indicates a MerchantReturnPolicy that may be applicable.
     */
    hasMerchantReturnPolicy?: IHasMerchantReturnPolicy;
    name: IMultilingualString;
    /**
     * 各アプリケーションに対するオファー
     */
    makesOffer?: IMakesOffer[];
    paymentAccepted?: IPaymentAccepted[];
    typeOf: OrganizationType.Corporation;
}
/**
 * ソート条件
 */
export interface ISortOrder {
    branchCode?: SortType;
}
/**
 * 販売者検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    branchCode?: {
        $eq?: string;
        $regex?: string;
    };
    hasMerchantReturnPolicy?: {
        applicablePaymentMethod?: { $eq?: string };
        itemCondition?: {
            id?: {
                $eq?: string;
            };
        };
    };
    id?: { $eq?: string };
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
    paymentAccepted?: {
        paymentMethodType?: { $eq?: string };
    };
}
