import EventType from '../../eventType';
import { PaymentMethodType } from '../../paymentMethodType';
import { ISeat } from '../../reservation';
import { IPaymentCard } from '../paymentCard';

export interface IAttributes extends IPaymentCard {
    /**
     * 購入管理番号(ムビチケ購入番号)
     */
    identifier: string;
    /**
     * pinコード(ムビチケ暗証番号)
     */
    accessCode: string;
    /**
     * 券種区分
     */
    serviceType: string;
    /**
     * ムビチケ利用対象座席予約
     */
    serviceOutput: {
        /**
         * 予約対象イベント
         */
        reservationFor: { typeOf: EventType.ScreeningEvent; id: string };
        /**
         * 予約チケット
         */
        reservedTicket: { ticketedSeat: ISeat };
    };
}

/**
 * ムビチケインターフェース
 */
export interface IMovieTicket extends IAttributes {
    typeOf: PaymentMethodType.MGTicket | PaymentMethodType.MovieTicket;
}
