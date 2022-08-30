import {
    ICOAInfo,
    ILocation as IEventLocation,
    IName as IEventName,
    ISuperEvent,
    IWorkPerformed
} from '../event/screeningEvent';
import { EventStatusType } from '../eventStatusType';
import { EventType } from '../eventType';
import { IMultilingualString } from '../multilingualString';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from '../priceSpecification/categoryCodeChargeSpecification';
import { IPriceSpecification as ICompoundPriceSpecification } from '../priceSpecification/compoundPriceSpecification';
import { IPriceSpecification as IMovieTicketTypeChargeSpecification } from '../priceSpecification/movieTicketTypeChargeSpecification';
import { IPriceSpecification as IUnitPriceSpecification } from '../priceSpecification/unitPriceSpecification';
import { IProject } from '../project';
import * as ReservationFactory from '../reservation';
import { ReservationStatusType } from '../reservationStatusType';
import { ReservationType } from '../reservationType';

// 最適化(2022-05-31~)
// Pickで表現(2022-07-28~)
// export type IOptimizedSuperEvent = Omit<ISuperEvent,
//     'subtitleLanguage' | 'dubLanguage' | 'organizer' | 'offers'
//     | 'endDate' | 'startDate' | 'doorDate' | 'eventStatus'>;
export type IOptimizedWorkPerformed = Omit<IWorkPerformed, 'name'> & {
    // ↓コンテンツ名称がstring型だった時期の予約に関して互換性を維持するため(2022-07-28~)
    name?: string | IMultilingualString;
};
export type IOptimizedSuperEvent = Pick<ISuperEvent,
    'additionalProperty' | 'id' | 'kanaName' | 'location'
    | 'name' | 'project' | 'soundFormat' | 'typeOf'
    | 'videoFormat' | 'description' | 'headline'
    // ↓COAのみ
    | 'identifier' | 'alternativeHeadline' | 'duration' | 'coaInfo'
// | 'workPerformed'
> & {
    workPerformed: IOptimizedWorkPerformed;
};
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
     * 基本的にsskts対応
     */
    coaInfo?: ICOAInfo;
    location: IEventLocation;
    name: IEventName;
    project: Pick<IProject, 'id' | 'typeOf'>;
    startDate: Date;
    superEvent: IOptimizedSuperEvent;
    typeOf: EventType.ScreeningEvent;
    // ↓廃止(2022-04-18~)
    // workPerformed?: IWorkPerformed;
    doorTime?: Date;
}
export type IPriceComponentSpecification = ICategoryCodeChargeSpecification
    | IMovieTicketTypeChargeSpecification
    | IUnitPriceSpecification;
export type IPriceSpecification = ICompoundPriceSpecification<IPriceComponentSpecification>;
export interface ISubReservation {
    reservedTicket: {
        typeOf: ReservationFactory.TicketType;
        ticketedSeat: ReservationFactory.ISeat;
    };
}
/**
 * イベント予約
 */
export interface IReservation extends ReservationFactory.IReservation<IPriceSpecification> {
    id: string;
    issuedThrough: ReservationFactory.IIssuedThrough;
    reservationFor: IReservationFor;
    reservationNumber: string;
    reservationStatus: ReservationStatusType;
    reservedTicket: ReservationFactory.ITicket;
    subReservation?: ISubReservation[];
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