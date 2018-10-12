import IMultilingualString from './multilingualString';
import OfferType from './offerType';
import PriceCurrency from './priceCurrency';
import { IPriceSpecification } from './priceSpecification';
import PriceSpecificationType from './priceSpecificationType';
import { IQuantitativeValue } from './quantitativeValue';

/**
 * offer interface
 * An offer to transfer some rights to an item or to provide a service
 * — for example, an offer to sell tickets to an event, to rent the DVD of a movie,
 * to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 */
export interface IOffer {
    typeOf: OfferType;
    id?: string;
    name?: string | IMultilingualString;
    description?: string | IMultilingualString;
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     */
    price: number;
    /**
     * The currency (in 3-letter ISO 4217 format) of the price or a price component,
     * when attached to PriceSpecification and its subtypes.
     */
    priceCurrency: PriceCurrency;
    /**
     * オファーの有効な顧客タイプ
     */
    eligibleCustomerType?: any;
    /**
     * オファーが有効となる期間
     */
    eligibleDuration?: IQuantitativeValue;
    /**
     * オファーの有効となる数
     */
    eligibleQuantity?: IQuantitativeValue;
    /**
     * オファーが有効となる地域
     */
    eligibleRegion?: any;
    /**
     * 価格仕様リスト
     */
    priceSpecification?: IPriceSpecification<PriceSpecificationType>[];
}
