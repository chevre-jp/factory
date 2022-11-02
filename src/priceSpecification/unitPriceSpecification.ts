import { OfferType } from '../offerType';
import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';
import { IProduct } from '../product';
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
export type IReferenceQuantity = Pick<IQuantitativeValue<UnitCode>, 'typeOf' | 'value' | 'unitCode' | 'minValue'>;
export type IAppliesToAddOnItemOffered = Pick<IProduct, 'id' | 'name' | 'productID' | 'typeOf'>;
export interface IAppliesToAddOn {
    typeOf: OfferType.Offer;
    // project
    id?: string;
    identifier?: string;
    itemOffered: IAppliesToAddOnItemOffered;
}
/**
 * 単価仕様
 */
export interface IPriceSpecification extends Pick<
    BaseSpecification<PriceSpecificationType.UnitPriceSpecification>,
    'project' | 'id' | 'typeOf' | 'name' | 'price' | 'priceCurrency'
    | 'valueAddedTaxIncluded' | 'accounting'
    | 'eligibleQuantity' | 'eligibleTransactionVolume'
> {
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
    appliesToAddOn?: IAppliesToAddOn[];
}
