import { IMonetaryAmount } from './monetaryAmount';
import { IOrganization } from './organization';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IService } from './service';
import { IThing } from './thing';

/**
 * A permit issued by an organization, e.g. a parking pass.
 * @see https://schema.org/Permit
 */
export interface IPermit extends IThing {
    project: IProject;
    typeOf: string;
    accessCode?: string;
    additionalProperty?: IPropertyValue<string>[];
    amount?: IMonetaryAmount;
    depositAmount?: IMonetaryAmount;
    paymentAmount?: IMonetaryAmount;
    /**
     * The organization issuing the ticket or permit.
     */
    issuedBy?: IOrganization;
    /**
     * The service through with the permit was granted.
     */
    issuedThrough?: IService;
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
