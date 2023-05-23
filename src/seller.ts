import { IMerchantReturnPolicy, IRestockingFee } from './merchantReturnPolicy';
import { IMultilingualString } from './multilingualString';
import { IOffer } from './offer';
import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IQuantitativeValue } from './quantitativeValue';
import { SortType } from './sortType';
import { UnitCode } from './unitCode';

// strict definition(2022-08-04~)
export type ISellerMerchantReturnPolicy = Pick<
    IMerchantReturnPolicy,
    'itemCondition' | 'typeOf' | 'merchantReturnDays' | 'restockingFee' | 'url'
> & {
    restockingFee: IRestockingFee;
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
export type IMakesOffer = Pick<
    IOffer,
    'typeOf' | 'availableAtOrFrom'
> & {
    /**
     * 適用取引期間
     */
    eligibleTransactionDuration?: IEligibleTransactionDuration;

};
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
     * A pointer to products or services offered by the organization or person.
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
