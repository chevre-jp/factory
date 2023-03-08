import { CreativeWorkType } from './creativeWorkType';
import { EventType } from './eventType';
import { IMultilingualString } from './multilingualString';
import { OfferType } from './offerType';
import { OrderType } from './order';
import { IProject } from './project';
import { PropertyValueType } from './propertyValue';
import { SortType } from './sortType';
import { IThing } from './thing';

export type CategorySetIdentifier = CreativeWorkType.Movie
    | EventType.ScreeningEvent
    | EventType.ScreeningEventSeries
    | PropertyValueType.LocationFeatureSpecification
    | 'OfferCatalog'
    | OfferType.Offer
    | OrderType.Order;
/**
 * {@link https://schema.org/CategoryCodeSet}
 */
export interface ICategoryCodeSet {
    typeOf: 'CategoryCodeSet';
    identifier: CategorySetIdentifier;
}
/**
 * {@link https://schema.org/CategoryCode}
 */
export interface IAdditionalProperty extends Pick<IThing, 'name'> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    id?: string;
    typeOf: 'CategoryCode';
    codeValue: string;
    inCodeSet: ICategoryCodeSet;
    name: IMultilingualString;
}
/**
 * 検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: {
        codeValue?: SortType;
    };
    project?: { id?: { $eq?: string } };
    id?: { $eq?: string };
    name?: { $regex?: string };
    codeValue?: {
        $eq?: string;
        $in?: string[];
    };
    inCodeSet?: {
        identifier?: {
            $eq?: string;
            $in?: string[];
        };
    };
}
