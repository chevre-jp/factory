import IMultilingualString from './multilingualString';
import OfferType from './offerType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IServiceType } from './serviceType';
import SortType from './sortType';
import { IThing } from './thing';

export interface IItemOffered {
    typeOf: string;
    serviceType?: IServiceType;
}

export interface IItemListElement {
    typeOf: OfferType;
    id: string;
}

/**
 * オファーカタログインターフェース
 */
export interface IOfferCatalog extends IThing {
    project: IProject;
    typeOf: 'OfferCatalog';
    id?: string;
    identifier: string;
    name: IMultilingualString;
    itemListElement: IItemListElement[];
    itemOffered: IItemOffered;
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    identifier?: SortType;
}

/**
 * オファーカタログ検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
        /**
         * @deprecated Use id
         */
        ids?: string[];
    };
    id?: string;
    identifier?: string | {
        $eq?: string;
    };
    name?: string;
    itemListElement?: {
        id?: { $in?: string[] };
    };
    itemOffered?: {
        typeOf?: { $eq?: string };
        serviceType?: {
            codeValue?: { $eq?: string };
        };
    };
}
