import { IMultilingualString } from './multilingualString';
import { PlaceType } from './placeType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

/**
 * 場所インターフェース
 */
export interface IPlace extends IThing {
    project: IProject;
    typeOf: PlaceType;
    id?: string;
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
