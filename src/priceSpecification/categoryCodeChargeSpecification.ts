import { ICategoryCode } from '../categoryCode';
import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';

export type IAppliesToCategoryCode = Pick<ICategoryCode, 'project' | 'typeOf' | 'codeValue' | 'inCodeSet'>;
/**
 * 区分加算料金
 */
export interface IPriceSpecification extends Pick<
    BaseSpecification<PriceSpecificationType.CategoryCodeChargeSpecification>,
    'project' | 'id' | 'typeOf' | 'name' | 'description'
    | 'price' | 'priceCurrency'
    | 'valueAddedTaxIncluded' | 'accounting'
> {
    price: number;
    /**
     * 適用カテゴリーコード
     * AND適用条件
     */
    appliesToCategoryCode: IAppliesToCategoryCode[];
}
