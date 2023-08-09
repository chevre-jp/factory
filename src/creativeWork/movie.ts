import * as CreativeWorkFactory from '../creativeWork';
import { CreativeWorkType } from '../creativeWorkType';
import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import { IProject } from '../project';
import { SortType } from '../sortType';

/**
 * コンテンツに対するオファー
 * 最適化(2023-08-01~)
 */
// tslint:disable-next-line:no-empty-interface
// export interface IOffer extends OfferFactory.IOffer {
// }
export type IOffer = Pick<OfferFactory.IOffer, 'typeOf' | 'availabilityEnds' | 'availabilityStarts'>;

/**
 * 配給者
 */
export interface IDistributor {
    id?: string;
    codeValue?: string;
}

/**
 * コンテンツ
 * {@link https://schema.org/Movie}
 */
export interface ICreativeWork extends Pick<
    CreativeWorkFactory.ICreativeWork,
    'additionalProperty' | 'alternativeHeadline' | 'contentRating' | 'copyrightHolder' | 'datePublished'
    | 'headline' | 'thumbnailUrl' | 'typeOf' | 'name' | 'identifier' | 'id'
> {
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
    offers: IOffer;
    /**
     * 配給者
     */
    distributor?: IDistributor;
    typeOf: CreativeWorkType.Movie;
}

/**
 * ソート条件
 */
export interface ISortOrder {
    identifier?: SortType;
}

export interface IOfferSearchConditions {
    availableFrom?: Date;
    availableThrough?: Date;
}

/**
 * 検索条件
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
    id?: {
        $eq?: string;
        $in?: string[];
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
