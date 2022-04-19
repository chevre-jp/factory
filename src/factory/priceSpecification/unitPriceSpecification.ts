import { IAddOn } from '../offer';
import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';
import { IQuantitativeValue } from '../quantitativeValue';
import { UnitCode } from '../unitCode';
import { IMovieTicket } from './movieTicketTypeChargeSpecification';

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
     * 適用ムビチケ
     */
    appliesToMovieTicket?: IMovieTicket;
    /**
     * 適用アドオン
     * アドオンを指定された場合に適用される
     */
    appliesToAddOn?: IAddOn[];
};
