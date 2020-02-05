import ItemAvailability from './itemAvailability';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import { IPriceSpecification as IUnitPriceSpecification } from './priceSpecification/unitPriceSpecification';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IServiceType } from './serviceType';
import SortType from './sortType';

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
    project: IProject;
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
    /**
     * The color of the product.
     */
    color?: string;
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
    'priceSpecification.price'?: SortType;
}

/**
 * 価格仕様検索条件インターフェース
 */
export interface ITicketTypePriceSpecificationSearchConditions {
    minPrice?: number;
    maxPrice?: number;
    referenceQuantity?: {
        value?: number;
    };
    accounting?: {
        minAccountsReceivable?: number;
        maxAccountsReceivable?: number;
    };
}

/**
 * 検索条件インターフェース
 */
export interface ITicketTypeSearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { ids?: string[] };
    id?: string;
    ids?: string[];
    identifier?: string | {
        $eq?: string;
    };
    identifiers?: string[];
    name?: string;
    priceSpecification?: ITicketTypePriceSpecificationSearchConditions;
    category?: {
        ids?: string[];
    };
}

export interface IService {
    /**
     * 興行区分
     */
    serviceType: IServiceType;
}

export interface ITicketTypeGroupAttributes {
    project: IProject;
    identifier: string;
    name: IMultilingualString;
    alternateName?: IMultilingualString;
    description: IMultilingualString;
    ticketTypes: string[];
    itemOffered: IService;
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * 券種グループインターフェース
 */
export type ITicketTypeGroup = ITicketTypeGroupAttributes & {
    id: string;
};

/**
 * 券種グループ検索条件インターフェース
 */
export interface ITicketTypeGroupSearchConditions {
    limit?: number;
    page?: number;
    project?: { ids?: string[] };
    id?: string;
    identifier?: string | {
        $eq?: string;
    };
    name?: string;
    ticketTypes?: string[];
}
