import { PersonType } from './personType';
import { IProgramMembership } from './programMembership';
import { IPropertyValue } from './propertyValue';
import * as ThingFactory from './thing';

/**
 * 追加特性
 */
export type IAdditionalProperty = IPropertyValue<string>[];
export import IIdentifier = ThingFactory.IIdentifier;
export type IMemberOf = IProgramMembership;
/**
 * プロフィール
 */
export interface IProfile extends Pick<ThingFactory.IThing, 'image' | 'url'> {
    additionalProperty?: IAdditionalProperty;
    /**
     * Physical address of the item.
     */
    address?: string;
    age?: string;
    /**
     * Email address.
     */
    email?: string;
    /**
     * Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property.
     */
    givenName?: string;
    /**
     * Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property.
     */
    familyName?: string;
    /**
     * Gender of the person.
     */
    gender?: string;
    identifier?: IIdentifier;
    name?: string;
    /**
     * The telephone number.
     */
    telephone?: string;
}
export interface IPersonAttributes {
    /**
     * Person ID(User sub)
     */
    id: string;
    identifier?: IIdentifier;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     */
    memberOf?: IMemberOf;
    typeOf: PersonType;
}
/**
 * 人物
 */
export type IPerson = IProfile & IPersonAttributes;
