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
}
