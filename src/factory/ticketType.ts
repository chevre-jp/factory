import ItemAvailability from './itemAvailability';
import IMultilingualString from './multilingualString';
import { IOffer, ISearchConditions } from './offer';
import { IPriceSpecification as IUnitPriceSpecification } from './priceSpecification/unitPriceSpecification';

// tslint:disable-next-line:no-empty-interface
export interface IPriceSpecification extends IUnitPriceSpecification {
}

/**
 * 券種属性インターフェース
 * 券種はイベントに対するオファーのベースを定義するものです
 * 基本的には、単価仕様を定義します
 * @see https://schema.org/Offer
 * @see https://schema.org/Product
 */
export interface ITicketTypeAttributes extends IOffer {
    identifier: string;
    name: IMultilingualString;
    alternateName?: IMultilingualString;
    /**
     * 在庫状況(オンラインor店頭のコントロールが可能)
     */
    availability?: ItemAvailability;
    /**
     * 単価仕様
     */
    priceSpecification?: IPriceSpecification;
}

/**
 * 券種インターフェース
 */
export type ITicketType = ITicketTypeAttributes & {
    id: string;
};

/**
 * 検索条件インターフェース
 */
export type ITicketTypeSearchConditions = ISearchConditions;
