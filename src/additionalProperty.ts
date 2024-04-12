import { ICategoryCode } from './categoryCode';
import { CreativeWorkType } from './creativeWorkType';
import { EventType } from './eventType';
import { IMultilingualString } from './multilingualString';
import { IOfferCatalog } from './offerCatalog';
import { OfferType } from './offerType';
import { PlaceType } from './placeType';
import { IProject } from './project';
import { PropertyValueType } from './propertyValue';
import { ISeller } from './seller';
import { SortType } from './sortType';
import { IThing } from './thing';

export type CategoryCodeType = ICategoryCode['typeOf'];
export type OfferCatalogType = IOfferCatalog['typeOf'];
export type SellerType = ISeller['typeOf'];
export type CategorySetIdentifier = CategoryCodeType
    | CreativeWorkType.Movie
    | EventType.ScreeningEvent
    | EventType.ScreeningEventSeries
    | PropertyValueType.LocationFeatureSpecification
    | OfferCatalogType
    | OfferType.Offer
    // | OrderType.Order // 廃止(2024-04-12~)
    | PlaceType.MovieTheater
    | PlaceType.Seat
    | SellerType;
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
