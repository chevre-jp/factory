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
     * この値が存在すれば、値の券種区分のムビチケが必須
     */
    appliesToMovieTicketType?: string;
};
