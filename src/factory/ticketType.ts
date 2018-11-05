import ItemAvailability from './itemAvailability';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';

export interface ITicketTypeAttributes extends IOffer {
    name: IMultilingualString;
    description: IMultilingualString;
    notes: IMultilingualString;
    price: number;
    /**
     * 在庫状況(オンラインor店頭のコントロールが可能)
     */
    availability: ItemAvailability;
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
    description: IMultilingualString;
    notes: IMultilingualString;
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
