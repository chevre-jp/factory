import { IMultilingualString } from './multilingualString';
import { PlaceType } from './placeType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IPropertyValue as ILocationFeatureSpecification } from './propertyValue/locationFeatureSpecification';
import { IThing } from './thing';

export type IAmenityFeature = ILocationFeatureSpecification;

/**
 * 場所インターフェース
 */
export interface IPlace extends Pick<IThing, 'identifier' | 'name'> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: PlaceType;
    id?: string;
    amenityFeature?: IAmenityFeature[];
    address?: IMultilingualString;
    branchCode?: string;
    containedInPlace?: IPlace;
    containsPlace?: IPlace[];
    maximumAttendeeCapacity?: number;
    name?: IMultilingualString;
    // openingHoursSpecification?: any;
    openSeatingAllowed?: boolean;
    smokingAllowed?: boolean;
    telephone?: string;
    additionalProperty?: IPropertyValue<string>[];
}
