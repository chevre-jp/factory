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
export interface ITicketTypeGroupAttributes {
    name: IMultilingualString;
    ticketTypes: string[];
}
/**
 * 券種グループインターフェース
 */
export type ITicketTypeGroup = ITicketTypeGroupAttributes & {
    id: string;
};
