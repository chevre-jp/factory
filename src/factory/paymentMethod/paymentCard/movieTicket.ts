import { EventType } from '../../eventType';
import { ISeat } from '../../reservation';
import { IPaymentCard } from '../paymentCard';

export interface IReservationFor { typeOf: EventType.ScreeningEvent; id: string; }
export interface IServiceOutput {
    /**
     * 予約対象イベント
     */
    reservationFor: IReservationFor;
    /**
     * 予約チケット
     */
    reservedTicket: { ticketedSeat: ISeat };
}
export interface IAttributes extends IPaymentCard {
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
    serviceOutput: IServiceOutput;
}

/**
 * MovieTicket決済カードインターフェース
 */
export interface IMovieTicket extends IAttributes {
    typeOf: string;
}
