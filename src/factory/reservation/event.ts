import * as EventFactory from '../event';
import EventType from '../eventType';
import { IReservation } from '../reservation';

export type IReservationFor = EventFactory.IEvent<EventFactory.IAttributes<EventType>>;
/**
 * イベント予約インターフェース
 * どんなタイプのイベントに対する予約か
 */
export interface IEventReservation<T extends IReservationFor> extends IReservation {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: T;
}
