import * as CreativeWorkFactory from '../creativeWork';
import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import { IProject } from '../project';
import { SortType } from '../sortType';

/**
 * コンテンツに対するオファーインターフェース
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
 * コンテンツインターフェース
 * {@link https://schema.org/Movie}
 */
export interface ICreativeWork extends CreativeWorkFactory.ICreativeWork {
    project: Pick<IProject, 'id' | 'typeOf'>;
    identifier: string;
    /**
     * The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.
     */
    duration?: string;
    // 多言語型に統一(2022-07-28~)
    name?: IMultilingualString;
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
    // name?: SortType;
    // datePublished?: SortType;
    // 'offers.availabilityEnds'?: SortType;
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
    project?: {
        id?: { $eq?: string };
    };
    contentRating?: { $eq?: string };
    distributor?: {
        codeValue?: { $eq?: string };
    };
    identifier?: string | {
        $eq?: string;
        $in?: string[];
    };
    name?: string;
    datePublishedFrom?: Date;
    datePublishedThrough?: Date;
    offers?: IOfferSearchConditions;
    additionalProperty?: {
        $elemMatch?: {
            name?: {
                /**
                 * 一致する名称の追加特性がひとつでも存在する
                 */
                $eq?: string;
            };
        };
    };
}
