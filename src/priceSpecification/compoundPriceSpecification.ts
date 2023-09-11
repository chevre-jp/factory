import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';

export type IPriceComponent = Omit<BaseSpecification<PriceSpecificationType>, 'project'>;
/**
 * 複合価格仕様
 */
export type IPriceSpecification<T extends IPriceComponent> = Pick<
    BaseSpecification<PriceSpecificationType.CompoundPriceSpecification>,
    'typeOf' | 'priceCurrency' | 'valueAddedTaxIncluded'
> & {
    /**
     * 価格要素
     */
    priceComponent: T[];
};
