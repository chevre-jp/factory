import { IAddOn } from '../offer';
import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';
import { IQuantitativeValue } from '../quantitativeValue';
import { UnitCode } from '../unitCode';
import { IAppliesToMovieTicket as IMovieTicketTypeChargeSpecAppliesToMovieTicket } from './movieTicketTypeChargeSpecification';

// 明確に定義(2022-06-02~)
export type IAppliesToMovieTicket = Pick<
    IMovieTicketTypeChargeSpecAppliesToMovieTicket,
    'typeOf' | 'serviceType' | 'serviceOutput'
> & {
    /**
     * 単価オファー設定としては存在しないが、予約あるいは注文の価格仕様としては必須
     */
    identifier?: string;
};
export type IReferenceQuantity = Pick<IQuantitativeValue<UnitCode>, 'typeOf' | 'value' | 'unitCode'>;
/**
 * 単価仕様
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.UnitPriceSpecification> & {
    price: number;
    /**
     * 基準数量
     */
    referenceQuantity: IReferenceQuantity;
    /**
     * 適用MovieTicket
     */
    // 複数決済カード対応(2022-07-11~)
    appliesToMovieTicket?: IAppliesToMovieTicket | IAppliesToMovieTicket[];
    /**
     * 適用アドオン
     * アドオンを指定された場合に適用される
     */
    appliesToAddOn?: IAddOn[];
};
