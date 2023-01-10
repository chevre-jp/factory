import * as PropertyValueFactory from '../propertyValue';

export interface IPropertyValue extends Pick<PropertyValueFactory.IPropertyValue<string>, 'name' | 'value'> {
    typeOf: PropertyValueFactory.PropertyValueType.LocationFeatureSpecification;
}
