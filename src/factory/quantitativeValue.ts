import { UnitCode } from './unitCode';

/**
 * 定量値インターフェース
 */
export interface IQuantitativeValue {
    typeOf: 'QuantitativeValue';
    /**
     * 単位符号
     */
    unitCode: UnitCode;
    /**
     * The upper value of some characteristic or property.
     */
    maxValue?: number;
    /**
     * The lower value of some characteristic or property.
     */
    minValue?: number;
    /**
     * 値
     */
    value: number;
}
