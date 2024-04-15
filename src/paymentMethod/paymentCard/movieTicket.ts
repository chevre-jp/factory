import { EventType } from '../../eventType';
import { ISeat } from '../../reservation';
import { IPaymentCard } from '../paymentCard';

export interface IMovieTicketReservationFor { typeOf: EventType.ScreeningEvent; id: string; }
export interface IMovieTicketServiceOutput {
    /**
     * 予約対象イベント
     */
    reservationFor: IMovieTicketReservationFor;
    /**
     * 予約チケット
     */
    reservedTicket: {
        /**
         * チケット識別子
         * 指定された場合、予約のチケット識別子と関連付けされます
         */
        identifier?: string; // 追加(2024-04-15~)
        ticketedSeat: ISeat;
    };
}
/**
 * 決済カード
 */
export interface IMovieTicketPaymentCard extends Pick<
    IPaymentCard,
    'accessCode' | 'amount' | 'serviceOutput' | 'serviceType' | 'identifier' | 'typeOf'
> {
    /**
     * 決済方法区分コード
     */
    typeOf: string;
    category: {
        /**
         * 前売券（カード）の種類
         * 全国券,劇場券など
         */
        codeValue: string; // 追加(2023-02-08~)
    };
    /**
     * 購入管理番号
     */
    identifier: string;
    /**
     * pinコード
     */
    accessCode?: string;
    /**
     * 券種区分
     */
    serviceType: string;
    /**
     * 利用対象予約
     */
    serviceOutput: IMovieTicketServiceOutput;
}
