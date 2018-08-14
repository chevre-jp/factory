import * as EventFactory from '../event';
import EventType from '../eventType';
import * as ReservationFactory from '../reservation';
import ReservationStatusType from '../reservationStatusType';

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
/**
 * 検索条件
 */
export interface ISearchConditions {
    /**
     * 予約IDリスト
     */
    ids?: string[];
    /**
     * 予約ステータスリスト
     */
    reservationStatuses?: ReservationStatusType[];
}
