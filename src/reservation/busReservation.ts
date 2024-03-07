import { ITicketPriceComponent, ITicketPriceSpecification } from '../order';
import { ProductType } from '../product';
import * as ReservationFactory from '../reservation';
import { ReservationType } from '../reservationType';
import { ITripWithDetails as IBusTrip } from '../trip/busTrip';
import { TripType } from '../tripType';

export type IReservationFor = Pick<IBusTrip, 'arrivalBusStop' | 'arrivalTime' | 'busName' | 'busNumber' | 'departureBusStop' | 'departureTime' | 'id' | 'identifier' | 'name' | 'typeOf'> & {
    id: string;
};
export type IPriceComponentSpecification = ITicketPriceComponent;
export type IPriceSpecification = ITicketPriceSpecification;
export interface ISubReservation {
    reservedTicket: {
        typeOf: ReservationFactory.TicketType;
        ticketedSeat: ReservationFactory.ISeat;
    };
}
export import IServiceTypeOfIssuedThrough = ReservationFactory.IServiceTypeOfIssuedThrough;
export interface IIssuedThrough extends ReservationFactory.IIssuedThrough {
    typeOf: ProductType.Transportation;
    serviceType?: IServiceTypeOfIssuedThrough;
    id: string;
}
/**
 * イベント予約
 */
export interface IReservation extends ReservationFactory.IReservation<IPriceSpecification> {
    id: string;
    issuedThrough: IIssuedThrough;
    reservationFor: IReservationFor;
    reservationNumber: string;
    reservationStatus: ReservationFactory.IAvailableReservationStatusType;
    reservedTicket: ReservationFactory.ITicket;
    subReservation?: ISubReservation[];
    typeOf: ReservationType.BusReservation;
}
export interface IReservationForSearchConditions {
    typeOf?: { $eq?: TripType };
    id?: {
        $eq?: string;
        $in?: string[];
    };
}
/**
 * 検索条件
 */
export interface ISearchConditions extends ReservationFactory.ISearchConditions<ReservationType.BusReservation> {
    /**
     * 予約対象
     */
    reservationFor?: IReservationForSearchConditions;
}
