import { IMultilingualString } from './multilingualString';
import { OfferType } from './offerType';
import { IServiceType as IProductServiceType, ProductType } from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { SortType } from './sortType';
import { IThing } from './thing';

export type IServiceType = IProductServiceType & {
    id?: string;
};
export interface IItemOffered {
    typeOf: ProductType;
    /**
     * 興行区分
     * 廃止して興行プロダクトへ移行(2022-09-02~)
     */
    // serviceType?: IServiceType;
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
            $in?: string[];
            $nin?: string[];
        };
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
}
