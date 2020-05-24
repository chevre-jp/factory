import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

/**
 * 組織インターフェース
 */
export interface IOrganization extends IThing {
    project: IProject;
    typeOf: string;
    id?: string;
    location?: any;
    telephone?: string;
    /**
     * A property-value pair representing an additional characteristics of the entitity,
     * e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     */
    additionalProperty?: IPropertyValue<string>[];
}
