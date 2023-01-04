import { ITicketPriceComponent, ITicketPriceSpecification } from '../order';
import { ProductType } from '../product';
import * as ReservationFactory from '../reservation';
import { ReservationStatusType } from '../reservationStatusType';
import { ReservationType } from '../reservationType';
import { ITrip as IBusTrip } from '../trip/busTrip';

export type IReservationFor = Pick<IBusTrip, 'arrivalBusStop' | 'arrivalTime' | 'busName' | 'busNumber' | 'departureBusStop' | 'departureTime' | 'id' | 'identifier' | 'name' | 'typeOf'>;
export type IPriceComponentSpecification = ITicketPriceComponent;
export type IPriceSpecification = ITicketPriceSpecification;
export interface ISubReservation {
    reservedTicket: {
        typeOf: ReservationFactory.TicketType;
        ticketedSeat: ReservationFactory.ISeat;
    };
}
export import IServiceTypeOfIssuedThrough = ReservationFactory.IServiceTypeOfIssuedThrough;
export interface IIssuedThrough {
    typeOf: ProductType.Transportation;
    serviceType?: IServiceTypeOfIssuedThrough;
    // 興行IDを追加(2022-09-08~)
    id?: string;
}
/**
 * イベント予約
 */
export interface IReservation extends ReservationFactory.IReservation<IPriceSpecification> {
    id: string;
    issuedThrough: IIssuedThrough;
    reservationFor: IReservationFor;
    reservationNumber: string;
    reservationStatus: ReservationStatusType;
    reservedTicket: ReservationFactory.ITicket;
    subReservation?: ISubReservation[];
    typeOf: ReservationType.BusReservation;
}
/**
 * 検索条件
 */
export interface ISearchConditions extends ReservationFactory.ISearchConditions<ReservationType.BusReservation> {
    /**
     * 予約対象
     */
    // reservationFor?: IReservationForSearchConditions;
}
