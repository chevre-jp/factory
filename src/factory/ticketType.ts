import IMultilingualString from './multilingualString';

/**
 * 券種インターフェース
 */
export interface ITicketType {
    id: string;
    name: IMultilingualString;
    description: IMultilingualString;
    notes: IMultilingualString;
    charge: number;
}
/**
 * 券種グループインターフェース
 */
export interface ITicketTypeGroup {
    id: string;
    name: IMultilingualString;
    ticketTypes: string[];
}
