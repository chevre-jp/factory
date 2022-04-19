import { IPriceSpecification as BaseSpecification, ISearchConditions as IBaseSearchConditions } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';

/**
 * 複合価格仕様インターフェース
 */
export type IPriceSpecification<T extends BaseSpecification<PriceSpecificationType>>
    = BaseSpecification<PriceSpecificationType.CompoundPriceSpecification> & {
        /**
         * 価格要素
         */
        priceComponent: T[];
    };
/**
 * 検索条件インターフェース
 */
export interface ISearchConditions<T extends PriceSpecificationType>
    extends IBaseSearchConditions<PriceSpecificationType.CompoundPriceSpecification> {
    /**
     * 価格仕様要素
     */
    priceComponent?: {
        typeOf: T;
    };
}
