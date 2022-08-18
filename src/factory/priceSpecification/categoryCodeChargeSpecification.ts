import { ICategoryCode } from '../categoryCode';
import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';

export type IAppliesToCategoryCode = Pick<ICategoryCode, 'project' | 'typeOf' | 'codeValue' | 'inCodeSet'>;
/**
 * 区分加算料金
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.CategoryCodeChargeSpecification> & {
    price: number;
    /**
     * 適用カテゴリーコード
     * AND適用条件
     */
    appliesToCategoryCode: IAppliesToCategoryCode[];
};
