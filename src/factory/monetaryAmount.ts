import { IThing } from './thing';

/**
 * 金額インターフェース
 * @see https://schema.org/MonetaryAmount
 */
export interface IMonetaryAmount extends IThing {
    typeOf: 'MonetaryAmount';
    /**
     * The currency in which the monetary amount is expressed.
     */
    currency: string;
    /**
     * The upper value of some characteristic or property.
     */
    maxValue?: number;
    /**
     * The lower value of some characteristic or property.
     */
    minValue?: number;
    /**
     * The date when the item becomes valid.
     */
    validFrom?: Date;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     */
    validThrough?: Date;
    /**
     * The value of the quantitative value or property value node.
     */
    value?: number;
}
