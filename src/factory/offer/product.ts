import IMultilingualString from '../multilingualString';
import { IOffer as IBaseOffer } from '../offer';
import { IPriceSpecification as IUnitPriceSpecification } from '../priceSpecification/unitPriceSpecification';
import { IPropertyValue } from '../propertyValue';
import SortType from '../sortType';

// tslint:disable-next-line:no-empty-interface
export interface IPriceSpecification extends IUnitPriceSpecification {
}

export interface IItemOffered {
    typeOf: 'Product';
    name?: IMultilingualString;
    description?: IMultilingualString;
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * プロダクトオファーインターフェース
 */
export interface IOffer extends IBaseOffer {
    identifier: string;
    /**
     * 単価仕様
     */
    priceSpecification?: IPriceSpecification;
    itemOffered: IItemOffered;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    'priceSpecification.price'?: SortType;
}

/**
 * 価格仕様検索条件インターフェース
 */
export interface IPriceSpecificationSearchConditions {
    minPrice?: number;
    maxPrice?: number;
    referenceQuantity?: {
        value?: number;
    };
    accounting?: {
        minAccountsReceivable?: number;
        maxAccountsReceivable?: number;
    };
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    id?: string;
    ids?: string[];
    identifier?: string;
    identifiers?: string[];
    name?: string;
    priceSpecification?: IPriceSpecificationSearchConditions;
    category?: {
        ids?: string[];
    };
}
