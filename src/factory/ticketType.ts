import { IAccountTitle } from './accountTitle';
import ItemAvailability from './itemAvailability';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import { IQuantitativeValue } from './quantitativeValue';
import { UnitCode } from './unitCode';

/**
 * 勘定インターフェース
 */
export interface IAccounting {
    typeOf: 'Accounting';
    /**
     * 営業収益
     */
    operatingRevenue: IAccountTitle;
    /**
     * 営業外収益
     */
    nonOperatingRevenue?: IAccountTitle;
    /**
     * 売掛金
     */
    accountsReceivable: number;
}

/**
 * 券種属性インターフェース
 */
export interface ITicketTypeAttributes extends IOffer {
    name: IMultilingualString;
    alternateName?: IMultilingualString;
    description: IMultilingualString;
    price: number;
    /**
     * 在庫状況(オンラインor店頭のコントロールが可能)
     */
    availability: ItemAvailability;
    /**
     * 適用量(価格単位や量制限のコントロールが可能)
     */
    eligibleQuantity: IQuantitativeValue<UnitCode.C62>;
    /**
     * 勘定内容
     */
    accounting: IAccounting;
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
export interface ITicketTypeSearchConditions {
    limit?: number;
    page?: number;
    id?: string;
    name?: string;
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
