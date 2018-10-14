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
     * 値
     */
    value: number;
}
