import { IThing } from './thing';

export enum RefundTypeEnumeration {
    ExchangeRefund = 'ExchangeRefund',
    FullRefund = 'FullRefund',
    StoreCreditRefund = 'StoreCreditRefund'
}

export enum ReturnFeesEnumeration {
    OriginalShippingFees = 'OriginalShippingFees',
    RestockingFees = 'RestockingFees',
    ReturnShippingFees = 'ReturnShippingFees'
}

/**
 * 返品ポリシーインターフェース
 * @see https://schema.org/MerchantReturnEnumeration
 */
export enum MerchantReturnEnumeration {
    /**
     * there is a finite window for product returns.
     */
    MerchantReturnFiniteReturnWindow = 'MerchantReturnFiniteReturnWindow',
    /**
     * product returns are not permitted.
     */
    MerchantReturnNotPermitted = 'MerchantReturnNotPermitted',
    /**
     * there is an unlimited window for product returns.
     */
    MerchantReturnUnlimitedWindow = 'MerchantReturnUnlimitedWindow',
    /**
     * a product return policy is not specified here.
     */
    MerchantReturnUnspecified = 'MerchantReturnUnspecified'
}

export interface IMerchantReturnPolicy extends IThing {
    typeOf: 'MerchantReturnPolicy';
    /**
     * Are in-store returns offered?
     */
    inStoreReturnsOffered?: boolean;
    /**
     * The merchantReturnDays property indicates the number of days (from purchase)
     * within which relevant merchant return policy is applicable. Supersedes productReturnDays.
     */
    merchantReturnDays?: number;
    /**
     * Indicates a Web page or service by URL, for product return. Supersedes productReturnLink.
     */
    merchantReturnLink?: string;
    /**
     * A refundType, from an enumerated list.
     */
    refundType?: RefundTypeEnumeration;
    /**
     * Indicates (via enumerated options) the return fees policy for a MerchantReturnPolicy
     */
    returnFees?: ReturnFeesEnumeration;
    /**
     * A returnPolicyCategory expresses at most one of several enumerated kinds of return.
     */
    returnPolicyCategory?: MerchantReturnEnumeration;
}
