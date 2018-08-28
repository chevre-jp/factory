import IMultilingualString from './multilingualString';

export interface ITicketTypeAttributes {
    name: IMultilingualString;
    description: IMultilingualString;
    notes: IMultilingualString;
    charge: number;
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
