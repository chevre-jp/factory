import { IMerchantReturnPolicy } from '../merchantReturnPolicy';
import { IMultilingualString } from '../multilingualString';
import { IProject } from '../project';
import { IPropertyValue } from '../propertyValue';
import { SortType } from '../sortType';

export type IOfferMerchantReturnPolicy = Pick<
    IMerchantReturnPolicy,
    'typeOf' | 'customerRemorseReturnFees' | 'customerRemorseReturnFeesMovieTicket'
> & {
    project: Pick<IProject, 'id' | 'typeOf'>;
    additionalProperty?: IPropertyValue<string>[];
    id?: string;
    identifier: string;
    name?: IMultilingualString;
};
export interface IOfferMerchantReturnPolicySortOrder {
    identifier?: SortType;
}
export interface IOfferMerchantReturnPolicySearchConditions {
    limit?: number;
    page?: number;
    sort?: IOfferMerchantReturnPolicySortOrder;
    project?: { id?: { $eq?: string } };
    id?: {
        $eq?: string;
        $in?: string[];
    };
    identifier?: {
        $eq?: string;
        $in?: string[];
        $regex?: string;
    };
    name?: {
        $regex?: string;
    };
}
