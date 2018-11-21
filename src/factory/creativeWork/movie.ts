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
 * 映画作品インターフェース
 */
export interface ICreativeWork extends CreativeWorkFactory.ICreativeWork {
    identifier: string;
    name: string;
    /**
     * 上映時間
     */
    duration: string;
    /**
     * 販売情報
     */
    offers?: IOffer;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    identifier?: SortType;
    name?: SortType;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    identifier?: string;
    name?: string;
    datePublishedFrom?: Date;
    datePublishedThrough?: Date;
}
