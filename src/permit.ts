import { IAccount } from './account';
import { IMonetaryAmount } from './monetaryAmount';
import { IOrganization } from './organization';
import { IProduct } from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

export enum PermitType {
    Permit = 'Permit'
}
export type IIssuedThrough = Pick<IProduct, 'id' | 'project' | 'serviceType' | 'typeOf'>;
// accountTypeは不要なので廃止(2023-02-16~)
// export type IPaymentAccount = Pick<IAccount, 'project' | 'typeOf' | 'accountNumber' | 'accountType'>;
export type IPaymentAccount = Pick<IAccount, 'project' | 'typeOf' | 'accountNumber'>;
export type IAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'value'>;
export type IDepositAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'maxValue' | 'minValue'>;
export type IPaymentAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'maxValue' | 'minValue'>;
export type IIssuedBy = Pick<IOrganization, 'typeOf' | 'id' | 'name'>;
/**
 * A permit issued by an organization, e.g. a parking pass.
 * {@link https://schema.org/Permit}
 */
export interface IPermit extends Pick<IThing, 'name'> {
    name?: string;
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: PermitType;
    identifier?: string;
    accessCode?: string;
    additionalProperty?: IPropertyValue<string>[];
    amount?: IAmount;
    depositAmount?: IDepositAmount;
    paymentAmount?: IPaymentAmount;
    paymentAccount?: IPaymentAccount;
    dateIssued?: Date;
    /**
     * The organization issuing the ticket or permit.
     */
    issuedBy?: IIssuedBy;
    /**
     * The service through with the permit was granted.
     */
    issuedThrough?: IIssuedThrough;
    /**
     * The target audience for this permit.
     */
    // permitAudience?: any;
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
    // validIn?: any;
    /**
     * The date when the item is no longer valid.
     */
    validUntil?: Date;
}
