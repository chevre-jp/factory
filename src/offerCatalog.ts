import { IMultilingualString } from './multilingualString';
import { OfferType } from './offerType';
import { IAppliesToMovieTicket } from './priceSpecification/unitPriceSpecification';
import { ProductType } from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { SortType } from './sortType';
import { IThing } from './thing';

export type OfferCatalogType = 'OfferCatalog';
export interface IItemOffered {
    typeOf: ProductType;
}
/**
 * カタログのアイテムリスト
 */
export interface IItemListElementAsOfferCatalog {
    typeOf: OfferCatalogType;
    /**
     * サブカタログID
     */
    id: string;
}
/**
 * サブカタログのアイテムリスト
 */
export interface IItemListElementAsAggregateOffer {
    typeOf: OfferType.Offer;
    /**
     * 集計オファーID
     */
    id: string;
}
export type IItemListElement = IItemListElementAsOfferCatalog | IItemListElementAsAggregateOffer;
export interface IReletedOfferPriceSpecification {
    appliesToMovieTicket?: Pick<IAppliesToMovieTicket, 'serviceOutput'>[];
}
export interface IRelatedOffer {
    typeOf: OfferType.Offer;
    priceSpecification?: IReletedOfferPriceSpecification;
}
/**
 * オファーカタログ
 */
export interface IOfferCatalog extends Pick<IThing, 'name' | 'description' | 'alternateName'> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: OfferCatalogType;
    id?: string;
    identifier: string;
    name: IMultilingualString;
    itemListElement: IItemListElement[];
    itemOffered: IItemOffered;
    additionalProperty?: IPropertyValue<string>[];
    /**
     * 関連オファー
     */
    relatedOffer?: IRelatedOffer;
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
    id?: {
        $in?: string[];
        $regex?: string;
    };
    identifier?: {
        $eq?: string;
        $regex?: string;
    };
    name?: string;
    itemListElement?: {
        id?: {
            /**
             * 以下条件を全て満たす
             */
            $all?: string[];
            $in?: string[];
            $nin?: string[];
        };
        typeOf?: { $eq?: string };
    };
    itemOffered?: {
        typeOf?: { $eq?: string };
        serviceType?: {
            codeValue?: { $eq?: string };
        };
    };
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
    relatedOffer?: {
        priceSpecification?: {
            appliesToMovieTicket?: {
                serviceOutput?: {
                    /**
                     * 決済方法区分
                     */
                    typeOf?: { $in?: string[] };
                };
            };
        };
    };
}
