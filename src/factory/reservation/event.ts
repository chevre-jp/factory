// import { } from '../event/screeningEvent';
import {
    ICOAInfo,
    ILocation as IEventLocation,
    IName as IEventName,
    ISuperEvent,
    IWorkPerformed
} from '../event/screeningEvent';
import EventStatusType from '../eventStatusType';
import EventType from '../eventType';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from '../priceSpecification/categoryCodeChargeSpecification';
import { IPriceSpecification as ICompoundPriceSpecification } from '../priceSpecification/compoundPriceSpecification';
import { IPriceSpecification as IMovieTicketTypeChargeSpecification } from '../priceSpecification/movieTicketTypeChargeSpecification';
import { IPriceSpecification as IUnitPriceSpecification } from '../priceSpecification/unitPriceSpecification';
import { IProject } from '../project';
import * as ReservationFactory from '../reservation';
import ReservationType from '../reservationType';

// IReservationForを最適化
// export type IReservationFor = IScreeningEvent;
export interface IReservationFor {
    endDate: Date;
    eventStatus: EventStatusType;
    id: string;
    /**
     * COA予約でのみ使用されている
     */
    identifier?: string;
    /**
     * その他COA情報
     * @deprecated 基本的にCinemaSunshineの互換性維持目的であり、そのうち廃止予定
     */
    coaInfo?: ICOAInfo;
    location: IEventLocation;
    name: IEventName;
    project: IProject;
    startDate: Date;
    superEvent: ISuperEvent;
    typeOf: EventType.ScreeningEvent;
    workPerformed?: IWorkPerformed;
    doorTime?: Date;
}

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
