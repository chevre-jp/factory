import { IMerchantReturnPolicy } from './merchantReturnPolicy';
import { IMultilingualString } from './multilingualString';
import { IPlace } from './place';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

export type IHasMerchantReturnPolicy = IMerchantReturnPolicy[];

export type ILocation = IPlace;

export type IParentOrganization = IOrganization;

/**
 * 組織インターフェース
 */
export interface IOrganization extends IThing {
    typeOf: string;
    id?: string;
    email?: string;
    /**
     * Indicates a MerchantReturnPolicy that may be applicable.
     */
    hasMerchantReturnPolicy?: IHasMerchantReturnPolicy;
    legalName?: IMultilingualString;
    location?: ILocation;
    logo?: string;
    parentOrganization?: IParentOrganization;
    telephone?: string;
    /**
     * A property-value pair representing an additional characteristics of the entitity,
     * e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     */
    additionalProperty?: IPropertyValue<string>[];
}
