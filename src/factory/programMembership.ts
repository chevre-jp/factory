import { IOrganization } from './organization';
import { IPerson } from './person';
import { IProduct } from './product';
import { IProject } from './project';
// import { IQuantitativeValue } from './quantitativeValue';
import { IThing } from './thing';

export enum ProgramMembershipType {
    ProgramMembership = 'ProgramMembership'
}

// export interface IMembershipFor {
//     typeOf: string;
//     id: string;
// }

export type IHostingOrganization = IOrganization;

export type IMember = IPerson;

/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 * {@link https://schema.org/ProgramMembership}
 */
export interface IProgramMembership extends IThing {
    project: IProject;
    typeOf: string;
    /**
     * The organization (airline, travelers' club, etc.) the membership is made with.
     */
    // hostingOrganization?: IHostingOrganization;
    /**
     * target program
     */
    // membershipFor?: IMembershipFor;
    /**
     * The service through with the permit was granted.
     */
    issuedThrough?: IProduct;
    /**
     * A member of an Organization or a ProgramMembership.
     */
    member?: IMember[];
    /**
     * A unique identifier for the membership.
     */
    membershipNumber?: string;
    /**
     * The number of membership points earned by the member.
     * If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.)
     */
    // membershipPointsEarned?: IQuantitativeValue<any>;
    /**
     * The program providing the membership.
     */
    // programName?: string;
}
