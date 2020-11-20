import * as CreativeWorkFactory from '../creativeWork';
import * as OfferFactory from '../offer';
import SortType from '../sortType';

/**
 * 映画作品に対するオファーインターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface IOffer extends OfferFactory.IOffer {
}

/**
 * 配給者インターフェース
 */
export interface IDistributor {
    id?: string;
    codeValue?: string;
}

/**
 * 映画作品インターフェース
 * @see https://schema.org/Movie
 */
export interface ICreativeWork extends CreativeWorkFactory.ICreativeWork {
    identifier: string;
    name: string;
    /**
     * The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.
     */
    duration?: string;
    /**
     * 販売情報
     */
    offers?: IOffer;
    /**
     * 配給者
     */
    distributor?: IDistributor;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    identifier?: SortType;
    name?: SortType;
    datePublished?: SortType;
    'offers.availabilityEnds'?: SortType;
}

export interface IOfferSearchConditions {
    availableFrom?: Date;
    availableThrough?: Date;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { ids?: string[] };
    contentRating?: { $eq?: string };
    distributor?: {
        codeValue?: { $eq?: string };
    };
    identifier?: string | {
        $eq?: string;
    };
    name?: string;
    datePublishedFrom?: Date;
    datePublishedThrough?: Date;
    offers?: IOfferSearchConditions;
}
