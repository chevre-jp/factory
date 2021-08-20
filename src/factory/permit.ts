import { IMonetaryAmount } from './monetaryAmount';
import { IOrganization } from './organization';
import { IProduct } from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

/**
 * A permit issued by an organization, e.g. a parking pass.
 * {@link https://schema.org/Permit}
 */
export interface IPermit extends IThing {
    project: IProject;
    typeOf: string;
    accessCode?: string;
    additionalProperty?: IPropertyValue<string>[];
    amount?: IMonetaryAmount;
    depositAmount?: IMonetaryAmount;
    paymentAmount?: IMonetaryAmount;
    dateIssued?: Date;
    /**
     * The organization issuing the ticket or permit.
     */
    issuedBy?: IOrganization;
    /**
     * The service through with the permit was granted.
     */
    issuedThrough?: IProduct;
    /**
     * The target audience for this permit.
     */
    permitAudience?: any;
    /**
     * The duration of validity of a permit or similar thing.
     */
    validFor?: string;
    /**
     * The date when the item becomes valid.
     */
    validFrom?: Date;
    /**
     * The geographic area where a permit or similar thing is valid.
     */
    validIn?: any;
    /**
     * The date when the item is no longer valid.
     */
    validUntil?: Date;
}
