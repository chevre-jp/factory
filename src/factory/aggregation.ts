
import { IEvent } from './event/screeningEvent';

/**
 * 上映イベント+チケット集計インターフェース
 */
export type IEventWithTicketTypeCount = IEvent & {
    saleTicketCount: number;
    preSaleTicketCount: number;
    freeTicketCount: number;
};

export interface ICountTicketTypePerEventResult {
    totalCount: number;
    data: IEventWithTicketTypeCount[];
}

export interface ICountTicketTypePerEventConditions {
    /**
     * 上映イベントシーリズID
     */
    id?: string;
    /**
     * 開始日 FROM
     */
    startFrom?: Date;
    /**
     * 開始日 TO
     */
    startThrough?: Date;
    limit: number;
    page: number;
}
