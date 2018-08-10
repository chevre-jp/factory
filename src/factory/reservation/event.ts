import * as EventFactory from '../event';
import EventType from '../eventType';
import * as ReservationFactory from '../reservation';

export type IReservationFor = EventFactory.IEvent<EventFactory.IAttributes<EventType>>;
/**
 * イベント予約インターフェース
 * どんなタイプのイベントに対する予約か
 */
export interface IReservation<T extends IReservationFor> extends ReservationFactory.IReservation {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: T;
}
