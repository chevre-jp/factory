import { ICategoryCode } from '../categoryCode';
import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';

/**
 * 区分加算料金
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.CategoryCodeChargeSpecification> & {
    price: number;
    /**
     * 適用カテゴリーコード
     * AND適用条件
     */
    appliesToCategoryCode: ICategoryCode[];
};
