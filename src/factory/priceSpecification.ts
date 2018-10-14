import IMultilingualString from './multilingualString';
import PriceCurrency from './priceCurrency';
import PriceSpecificationType from './priceSpecificationType';
import { IQuantitativeValue } from './quantitativeValue';
import SortType from './sortType';

/**
 * 価格仕様インターフェース
 */
export interface IPriceSpecification<T extends PriceSpecificationType> {
    typeOf: T;
    name?: string | IMultilingualString;
    description?: string | IMultilingualString;
    eligibleQuantity?: IQuantitativeValue;
    eligibleTransactionVolume?: IPriceSpecification<PriceSpecificationType>[];
    maxPrice?: number;
    minPrice?: number;
    price?: number;
    priceCurrency: PriceCurrency;
    validFrom?: Date;
    validThrough?: Date;
    valueAddedTaxIncluded: boolean;
}
/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    price?: SortType;
}
/**
 * 検索条件インターフェース
 */
export interface ISearchConditions<T extends PriceSpecificationType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * 価格仕様タイプ
     */
    typeOf: T;
    validFrom?: Date;
    validThrough?: Date;
}
