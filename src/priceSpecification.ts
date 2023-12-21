import { IAccountTitle } from './accountTitle';
import { IMultilingualString } from './multilingualString';
import { PriceCurrency } from './priceCurrency';
import { PriceSpecificationType } from './priceSpecificationType';
import { IProject } from './project';
import { IQuantitativeValue } from './quantitativeValue';
import { SortType } from './sortType';
import { UnitCode } from './unitCode';

/**
 * 勘定
 */
export interface IAccounting {
    typeOf: 'Accounting';
    /**
     * 細目
     */
    operatingRevenue?: Pick<IAccountTitle, 'codeValue' | 'typeOf'>;
    /**
     * 売上金額
     */
    accountsReceivable?: number;
}
/**
 * 適用数量
 * n以上n以下のアイテム数に適用する設定
 */
export type IEligibleQuantity = Pick<IQuantitativeValue<UnitCode>, 'maxValue' | 'minValue' | 'typeOf' | 'unitCode'>;
export type IEligibleTransactionVolume = Pick<IPriceSpecification<PriceSpecificationType>, 'typeOf' | 'price' | 'priceCurrency' | 'valueAddedTaxIncluded'>;
/**
 * 価格仕様
 */
export interface IPriceSpecification<T extends PriceSpecificationType> {
    project?: Pick<IProject, 'id' | 'typeOf'>;
    id?: string;
    typeOf: T;
    name?: string | IMultilingualString;
    /**
     * 適用数量
     */
    eligibleQuantity?: IEligibleQuantity;
    eligibleTransactionVolume?: IEligibleTransactionVolume;
    /**
     * 発生金額
     */
    price?: number;
    /**
     * 通貨
     */
    priceCurrency: PriceCurrency;
    valueAddedTaxIncluded: boolean;
    /**
     * 勘定内容
     */
    accounting?: IAccounting;
}

/**
 * 価格仕様ソート条件
 */
export interface ISortOrder {
    price?: SortType;
}

/**
 * 価格仕様検索条件
 */
export interface ISearchConditions<T extends PriceSpecificationType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    id?: { $eq?: string };
    ids?: string[];
    typeOf?: T;
    appliesToCategoryCode?: {
        $elemMatch?: {
            codeValue?: {
                $eq?: string;
                $in?: string[];
            };
            'inCodeSet.identifier'?: {
                $eq?: string;
            };
        };
        codeValue?: {
            $eq?: string;
            $in?: string[];
        };
        inCodeSet?: {
            identifier?: {
                $eq?: string;
                $in?: string[];
            };

        };
    };
    price?: { $eq?: number };
    validFrom?: Date;
    validThrough?: Date;
    appliesToVideoFormats?: string[];
    appliesToMovieTicket?: {
        serviceTypes?: string[];
        serviceOutput?: { typeOf?: { $eq?: string } };
    };
}
