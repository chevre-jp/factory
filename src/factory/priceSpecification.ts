import { IAccountTitle } from './accountTitle';
import IMultilingualString from './multilingualString';
import PriceCurrency from './priceCurrency';
import PriceSpecificationType from './priceSpecificationType';
import { IQuantitativeValue } from './quantitativeValue';
import SortType from './sortType';
import { UnitCode } from './unitCode';

/**
 * 勘定インターフェース
 */
export interface IAccounting {
    typeOf: 'Accounting';
    /**
     * 営業収益
     */
    operatingRevenue: IAccountTitle;
    /**
     * 営業外収益
     */
    nonOperatingRevenue?: IAccountTitle;
    /**
     * 売掛金
     */
    accountsReceivable: number;
}

/**
 * 価格仕様インターフェース
 */
export interface IPriceSpecification<T extends PriceSpecificationType> {
    typeOf: T;
    name?: string | IMultilingualString;
    description?: string | IMultilingualString;
    eligibleQuantity?: IQuantitativeValue<UnitCode>;
    eligibleTransactionVolume?: IPriceSpecification<PriceSpecificationType>[];
    maxPrice?: number;
    minPrice?: number;
    price?: number;
    priceCurrency: PriceCurrency;
    validFrom?: Date;
    validThrough?: Date;
    valueAddedTaxIncluded: boolean;
    /**
     * 勘定内容
     */
    accounting?: IAccounting;
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
