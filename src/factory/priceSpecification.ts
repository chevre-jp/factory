import { IAccountTitle } from './accountTitle';
import IMultilingualString from './multilingualString';
import PriceCurrency from './priceCurrency';
import PriceSpecificationType from './priceSpecificationType';
import { IProject } from './project';
import { IQuantitativeValue } from './quantitativeValue';
import SortType from './sortType';
import SoundFormatType from './soundFormatType';
import { UnitCode } from './unitCode';
import VideoFormatType from './videoFormatType';

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
     * 売上金額
     */
    accountsReceivable: number;
}

/**
 * 価格仕様インターフェース
 */
export interface IPriceSpecification<T extends PriceSpecificationType> {
    project: IProject;
    id?: string;
    typeOf: T;
    name?: string | IMultilingualString;
    description?: string | IMultilingualString;
    eligibleQuantity?: IQuantitativeValue<UnitCode>;
    eligibleTransactionVolume?: IPriceSpecification<PriceSpecificationType>;
    maxPrice?: number;
    minPrice?: number;
    /**
     * 発生金額
     */
    price?: number;
    /**
     * 通貨
     */
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
    project?: { ids?: string[] };
    ids?: string[];
    typeOf?: T;
    validFrom?: Date;
    validThrough?: Date;
    appliesToVideoFormats?: VideoFormatType[];
    appliesToSoundFormats?: SoundFormatType[];
    appliesToMovieTicket?: {
        serviceTypes?: string[];
    };
}
