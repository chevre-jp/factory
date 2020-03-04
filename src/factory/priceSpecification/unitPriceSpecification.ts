import { IAddOn } from '../offer';
import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';
import { IQuantitativeValue } from '../quantitativeValue';
import { UnitCode } from '../unitCode';

/**
 * 単価仕様インターフェース
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.UnitPriceSpecification> & {
    price: number;
    /**
     * 基準数量
     */
    referenceQuantity: IQuantitativeValue<UnitCode>;
    /**
     * 適用ムビチケ券種区分
     */
    appliesToMovieTicketType?: string;
    /**
     * 適用アドオン
     * アドオンを指定された場合に適用される
     */
    appliesToAddOn?: IAddOn[];
};
