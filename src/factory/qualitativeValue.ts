import { IPropertyValue } from './propertyValue';

/**
 * 定性値インターフェース
 */
export interface IQualitativeValue<T extends string> {
    typeOf: T;
    additionalProperty?: IPropertyValue<any>[];
}
