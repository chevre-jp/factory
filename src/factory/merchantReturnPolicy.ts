import { IThing } from './thing';

export enum RefundTypeEnumeration {
    ExchangeRefund = 'ExchangeRefund',
    FullRefund = 'FullRefund',
    StoreCreditRefund = 'StoreCreditRefund'
}

export interface IMerchantReturnPolicy extends IThing {
    /**
     * Are in-store returns offered?
     */
    inStoreReturnsOffered?: boolean;
    /**
     * The merchantReturnDays property indicates the number of days (from purchase)
     * within which relevant merchant return policy is applicable.
     */
    merchantReturnDays?: number;
    /**
     * Indicates a Web page or service by URL, for product return.
     */
    merchantReturnLink?: any;
    /**
     * A refundType, from an enumerated list.
     */
    refundType?: RefundTypeEnumeration;
    /**
     * Indicates (via enumerated options) the return fees policy for a MerchantReturnPolicy
     */
    returnFees?: any;
    /**
     * A returnPolicyCategory expresses at most one of several enumerated kinds of return.
     */
    returnPolicyCategory?: any;
}
