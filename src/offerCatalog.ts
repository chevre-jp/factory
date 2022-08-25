import { IMultilingualString } from './multilingualString';
import { OfferType } from './offerType';
import { IServiceType as IProductServiceType } from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { SortType } from './sortType';
import { IThing } from './thing';

export type IServiceType = IProductServiceType & {
    id?: string;
};
export interface IItemOffered {
    typeOf: string;
    serviceType?: IServiceType;
}

export interface IItemListElement {
    typeOf: OfferType;
    id: string;
}

/**
 * オファーカタログ
 */
export interface IOfferCatalog extends Pick<IThing, 'name' | 'description' | 'alternateName'> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: 'OfferCatalog';
    id?: string;
    identifier: string;
    name: IMultilingualString;
    itemListElement: IItemListElement[];
    itemOffered: IItemOffered;
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * ソート条件
 */
export interface ISortOrder {
    identifier?: SortType;
}

/**
 * オファーカタログ検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    id?: string | {
        $in?: string[];
    };
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
