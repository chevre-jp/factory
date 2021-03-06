import { IEvent as IScreeningEvent } from '../event/screeningEvent';
import EventType from '../eventType';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from '../priceSpecification/categoryCodeChargeSpecification';
import { IPriceSpecification as ICompoundPriceSpecification } from '../priceSpecification/compoundPriceSpecification';
import { IPriceSpecification as IMovieTicketTypeChargeSpecification } from '../priceSpecification/movieTicketTypeChargeSpecification';
import { IPriceSpecification as IUnitPriceSpecification } from '../priceSpecification/unitPriceSpecification';
import * as ReservationFactory from '../reservation';
import ReservationType from '../reservationType';

export type IReservationFor = IScreeningEvent;

export type IPriceComponentSpecification = ICategoryCodeChargeSpecification
    | IMovieTicketTypeChargeSpecification
    | IUnitPriceSpecification;

export type IPriceSpecification = ICompoundPriceSpecification<IPriceComponentSpecification>;

/**
 * イベント予約インターフェース
 * どんなタイプのイベントに対する予約か
 */
export interface IReservation extends ReservationFactory.IReservation<IPriceSpecification> {
    id: string;
    reservationFor: IReservationFor;
    reservationNumber: string;
    reservedTicket: ReservationFactory.ITicket<IPriceSpecification>;
    typeOf: ReservationType.EventReservation;
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
