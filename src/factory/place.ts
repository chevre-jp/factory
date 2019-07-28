import IMultilingualString from './multilingualString';
import PlaceType from './placeType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';

/**
 * 場所インターフェース
 */
export interface IPlace {
    project: IProject;
    typeOf: PlaceType;
    id?: string;
    name?: IMultilingualString;
    alternateName?: IMultilingualString;
    description?: IMultilingualString;
    address?: IMultilingualString;
    branchCode?: string;
    containedInPlace?: IPlace;
    containsPlace?: IPlace[];
    maximumAttendeeCapacity?: number;
    openingHoursSpecification?: any;
    smokingAllowed?: boolean;
    telephone?: string;
    url?: string;
    additionalProperty?: IPropertyValue<string>[];
}
