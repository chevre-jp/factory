import { ICategoryCode } from '../categoryCode';
import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';

/**
 * カテゴリーコードチャージ仕様インターフェース
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.VideoFormatChargeSpecification> & {
    price: number;
    /**
     * 適用カテゴリーコード
     * AND適用条件
     */
    appliesToCategoryCode: ICategoryCode[];
};
