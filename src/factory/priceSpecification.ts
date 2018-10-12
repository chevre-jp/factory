import PriceCurrency from './priceCurrency';
import PriceSpecificationType from './priceSpecificationType';
import { IQuantitativeValue } from './quantitativeValue';

/**
 * 価格仕様インターフェース
 */
export interface IPriceSpecification<T extends PriceSpecificationType> {
    typeOf: T;
    eligibleQuantity?: IQuantitativeValue;
    eligibleTransactionVolume?: IPriceSpecification<PriceSpecificationType>[];
    maxPrice?: number;
    minPrice?: number;
    price: number;
    priceCurrency: PriceCurrency;
    validFrom?: Date;
    validThrough?: Date;
    valueAddedTaxIncluded: boolean;
}
