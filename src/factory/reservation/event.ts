// import * as EventFactory from '../event';
import { IEvent as IScreeningEvent } from '../event/screeningEvent';
import EventType from '../eventType';
import { IPriceSpecification as ICompoundPriceSpecification } from '../priceSpecification/compoundPriceSpecification';
import { IPriceSpecification as IMovieTicketTypeChargeSpecification } from '../priceSpecification/movieTicketTypeChargeSpecification';
import { IPriceSpecification as ISoundFormatChargeSpecification } from '../priceSpecification/soundFormatChargeSpecification';
import { IPriceSpecification as IUnitPriceSpecification } from '../priceSpecification/unitPriceSpecification';
import { IPriceSpecification as IVideoFormatChargeSpecification } from '../priceSpecification/videoFormatChargeSpecification';
import * as ReservationFactory from '../reservation';
import ReservationType from '../reservationType';

// export type IReservationFor = EventFactory.IEvent<EventFactory.IAttributes<EventType>>;
export type IReservationFor = IScreeningEvent;

export type IPriceComponentSpecification = IMovieTicketTypeChargeSpecification
    | IVideoFormatChargeSpecification
    | IUnitPriceSpecification
    | ISoundFormatChargeSpecification;

export type IPriceSpecification = ICompoundPriceSpecification<IPriceComponentSpecification>;

/**
 * イベント予約インターフェース
 * どんなタイプのイベントに対する予約か
 */
export interface IReservation extends ReservationFactory.IReservation<IPriceSpecification> {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: IReservationFor;
}

export interface IReservationForSearchConditions {
    typeOf?: EventType;
    id?: string;
    ids?: string[];
    location?: {
        ids?: string[];
        branchCodes?: string[];
    };
    superEvent?: {
        id?: string;
        ids?: string[];
        workPerformed?: {
            ids?: string[];
            identifiers?: string[];
        };
        location?: {
            ids?: string[];
            branchCodes?: string[];
        };
    };
    startFrom?: Date;
    startThrough?: Date;
    endFrom?: Date;
    endThrough?: Date;
}

/**
 * 検索条件
 */
export interface ISearchConditions extends ReservationFactory.ISearchConditions<ReservationType.EventReservation> {
    /**
     * 予約対象
     */
    reservationFor?: IReservationForSearchConditions;
}
