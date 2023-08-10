import { IThing } from './thing';
import { UnitCode } from './unitCode';

export type QuantitativeValueType = 'QuantitativeValue';
export enum StringValue {
    Infinity = 'Infinity'
}

/**
 * A point value or interval for product characteristics and other purposes.
 * {@link https://schema.org/QuantitativeValue}
 */
export interface IQuantitativeValue<T extends UnitCode | string> extends Pick<IThing, 'description' | 'name'> {
    /**
     * The upper value of some characteristic or property.
     */
    maxValue?: number;
    /**
     * The lower value of some characteristic or property.
     */
    minValue?: number;
    typeOf: QuantitativeValueType;
    /**
     * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL.
     * Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
     */
    unitCode?: T;
    /**
     * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for unitCode.
     */
    unitText?: string;
    /**
     * The value of the quantitative value or property value node.
     */
    value?: number | StringValue;
}
