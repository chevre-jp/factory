import {
    ICOAInfo,
    ILocation as IEventLocation,
    IName as IEventName,
    ISuperEvent,
    IWorkPerformed
} from '../event/screeningEvent';
import { EventType } from '../eventType';
import { IMultilingualString } from '../multilingualString';
import { ITicketPriceComponent, ITicketPriceSpecification } from '../order';
import { ProductType } from '../product';
import * as ReservationFactory from '../reservation';
import { ReservationStatusType } from '../reservationStatusType';
import { ReservationType } from '../reservationType';

export type IOptimizedWorkPerformed = Pick<
    IWorkPerformed,
    'typeOf' | 'id' | 'identifier' | 'duration' | 'contentRating' | 'version'
>
    & {
        // ↓コンテンツ名称がstring型だった時期の予約に関して互換性を維持するため(2022-07-28~)
        name?: string | IMultilingualString;
    };
export type IOptimizedSuperEvent = Pick<ISuperEvent,
    'additionalProperty' | 'id'
    // | 'kanaName' // 廃止(2024-01-26~)
    | 'location'
    | 'name' | 'soundFormat' | 'typeOf'
    | 'videoFormat'
    // | 'description' // 廃止(2024-01-26~)
    | 'headline'
    // ↓COAのみ
    | 'identifier' | 'alternativeHeadline' | 'duration' | 'coaInfo'
> & {
    workPerformed: IOptimizedWorkPerformed;
};
export interface IReservationFor {
    endDate: Date;
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
    startDate: Date;
    superEvent: IOptimizedSuperEvent;
    typeOf: EventType.ScreeningEvent;
    doorTime?: Date;
}
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
    typeOf: ProductType.EventService;
    serviceType?: IServiceTypeOfIssuedThrough;
    id: string;
}
/**
 * イベント予約
 */
export interface IReservation extends ReservationFactory.IReservation<IPriceSpecification> {
    bookingTime: Date;
    id: string;
    /**
     * 予約識別子
     */
    identifier?: string; // 追加(2024-04-15~)
    issuedThrough: IIssuedThrough;
    reservationFor: IReservationFor;
    reservationNumber: string;
    reservationStatus: ReservationStatusType.ReservationCancelled | ReservationStatusType.ReservationConfirmed;
    reservedTicket: ReservationFactory.ITicket;
    subReservation?: ISubReservation[];
    typeOf: ReservationType.EventReservation;
}
export interface IReservationForSearchConditions {
    typeOf?: EventType;
    id?: string | {
        $eq?: string;
    };
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
