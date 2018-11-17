import ItemAvailability from './itemAvailability';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import { IPriceSpecification as IUnitPriceSpecification } from './priceSpecification/unitPriceSpecification';
import SortType from './sortType';

// tslint:disable-next-line:no-empty-interface
export interface IPriceSpecification extends IUnitPriceSpecification {
}

/**
 * 券種属性インターフェース
 * 券種はイベントに対するオファーのベースを定義するものです
 * 基本的には、単価仕様を定義します
 */
export interface ITicketTypeAttributes extends IOffer {
    name: IMultilingualString;
    alternateName?: IMultilingualString;
    description: IMultilingualString;
    /**
     * 在庫状況(オンラインor店頭のコントロールが可能)
     */
    availability: ItemAvailability;
    /**
     * 座席単価仕様
     */
    priceSpecification: IPriceSpecification;
}

/**
 * 券種インターフェース
 */
export type ITicketType = ITicketTypeAttributes & {
    id: string;
};

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    'name.ja'?: SortType;
    'name.en'?: SortType;
    'priceSpecification.price'?: SortType;
}

/**
 * 価格仕様検索条件インターフェース
 */
export interface ITicketTypePriceSpecificationSearchConditions {
    minPrice?: number;
    maxPrice?: number;
}

/**
 * 検索条件インターフェース
 */
export interface ITicketTypeSearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    id?: string;
    ids?: string[];
    name?: string;
    priceSpecification?: ITicketTypePriceSpecificationSearchConditions;
}

export interface ITicketTypeGroupAttributes {
    name: IMultilingualString;
    alternateName?: IMultilingualString;
    description: IMultilingualString;
    ticketTypes: string[];
}

/**
 * 券種グループインターフェース
 */
export type ITicketTypeGroup = ITicketTypeGroupAttributes & {
    id: string;
};

/**
 * 検索条件インターフェース
 */
export interface ITicketTypeGroupSearchConditions {
    limit?: number;
    page?: number;
    id?: string;
    name?: string;
}
