import { EventType } from '../eventType';
import { ISeat } from '../reservation';
import { ReservationType } from '../reservationType';

export interface ISubReservation {
    typeOf: ReservationType.BusReservation | ReservationType.EventReservation;
    id: string;
    reservedTicket?: {
        ticketedSeat?: Pick<ISeat, 'seatNumber' | 'seatSection'>;
    };
}
export interface IReservationPackage {
    typeOf: ReservationType.ReservationPackage;
    reservationNumber: string; // unique
    subReservation: ISubReservation[];
}
export interface IAggregateReservation {
    typeOf: 'AggregateReservation';
    reservationCount: number;
    reservationFor: {
        id: string;
        typeOf: EventType.Event | EventType.ScreeningEvent;
    };
    reservations: IReservationPackage[];
}

// public async lockIfNotLimitExceeded
// reservationCount<=nであれば$push+$incする

// public async lock
// [reservationFor.id+seatNumber+seatSection][reservationNumber][subReservation.id]にunique indexを作成した上で$push+$incする

// public async unlock
// [id]あるいは[seatNumber+seatSection]でreservations.subReservationsから$pull+$incする

// public async countUnavailableOffers
// reservationCountを返す

// public async getHolder
// [id]あるいは[seatNumber+seatSection]でreservationNumberを返す

// public async searchHolders
// [id]あるいは[seatNumber+seatSection]のリストでreservationNumberのリストを返す
