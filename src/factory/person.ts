import PersonType from './personType';
import { IProgramMembership } from './programMembership';
import { IPropertyValue } from './propertyValue';
import * as ThingFactory from './thing';

/**
 * 追加属性インターフェース
 */
export type IAdditionalProperty = IPropertyValue<string>[];

export import IIdentifier = ThingFactory.IIdentifier;

/**
 * プロフィールインターフェース
 */
export interface IProfile extends ThingFactory.IThing {
    /**
     * 追加属性
     * プロジェクト固有の属性等
     */
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
    /**
     * The telephone number.
     */
    telephone?: string;
}

/**
 * 人物インターフェース
 */
export type IPerson = IProfile & {
    /**
     * Person ID (Amazon Cognito User Identifier)
     */
    id: string;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     */
    memberOf?: IProgramMembership;
    typeOf: PersonType;
};
