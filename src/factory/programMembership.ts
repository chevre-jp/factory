import { IThing } from './thing';

export enum ProgramMembershipType {
    ProgramMembership = 'ProgramMembership'
}
/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 * {@link https://schema.org/ProgramMembership}
 */
export interface IProgramMembership extends Pick<IThing, 'name'> {
    typeOf: ProgramMembershipType;
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
