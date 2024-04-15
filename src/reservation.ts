import type * as COA from '@motionpicture/coa-service';

import { CreativeWorkType } from './creativeWorkType';
import { IMultilingualString } from './multilingualString';
import * as OfferFactory from './offer';
import { OfferType } from './offerType';
import { OrganizationType } from './organizationType';
import { IPermit } from './permit';
import { PersonType } from './personType';
import * as MovieTheaterFactory from './place/movieTheater';
import * as ScreeningRoomFactory from './place/screeningRoom';
import * as SeatFactory from './place/seat';
import { PlaceType } from './placeType';
import { PriceCurrency } from './priceCurrency';
import { IPriceSpecification as IGenericPriceSpecification } from './priceSpecification';
import { PriceSpecificationType } from './priceSpecificationType';
import { IServiceType, ProductType } from './product';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { ReservationStatusType } from './reservationStatusType';
import { ReservationType } from './reservationType';
import { SortType } from './sortType';

export type TicketType = 'Ticket';

// 予約の単価オファーを最適化(属性不足が判明すれば適宜拡張する)
export interface ITicketType {
    additionalProperty?: IPropertyValue<string>[];
    category?: OfferFactory.ICategory;
    color?: string;
    description?: string | IMultilingualString;
    id?: string;
    identifier: string;
    name?: IMultilingualString;
    typeOf: OfferType.Offer;
    validRateLimit?: OfferFactory.IValidRateLimit;
}
export type IPriceSpecification = IGenericPriceSpecification<PriceSpecificationType>;
export type ISeatingType = SeatFactory.ISeatingType;
export type IUnderNameType = CreativeWorkType.WebApplication
    | PersonType.Person
    | OrganizationType.Organization
    | OrganizationType.Corporation
    | OrganizationType.Project;
/**
 * under name interface
 */
export interface IUnderName {
    typeOf: IUnderNameType;
    name: string;
    additionalName?: string;
    address?: string;
    age?: string;
    description?: string | IMultilingualString;
    email?: string;
    familyName?: string;
    gender?: string;
    givenName?: string;
    id?: string;
    /**
     * システム利用識別子のみ継承
     */
    identifier?: IPropertyValue<string>[];
    telephone?: string;
    url?: string;
}
/**
 * seat interface
 */
export interface ISeat {
    typeOf: PlaceType.Seat;
    /**
     * The cabin/class of the seat.
     */
    seatingType?: ISeatingType;
    /**
     * The location of the reserved seat (e.g., 27B).
     */
    seatNumber: string;
    /**
     * The row location of the reserved seat (e.g., B).
     */
    seatRow: string;
    /**
     * 座席セクション
     */
    seatSection: string;
}
/**
 * COA券種情報
 */
export type ICOATicketInfoWithDetails = COA.factory.reserve.IUpdReserveTicket & {
    /**
     * チケット名
     */
    ticketName: string;
    /**
     * チケット名（カナ）
     */
    ticketNameKana: string;
    /**
     * チケット名（英）
     */
    ticketNameEng: string;
    /**
     * ポイント割引の場合の消費ポイント
     */
    usePoint: number;
};
export type IReservationFor = any;
/**
 * 予約チケット情報
 */
export interface ITicketIssuedBy {
    typeOf: IUnderNameType;
    name: string;
}
export interface ITicket {
    typeOf: TicketType;
    /**
     * The date the ticket was issued.
     */
    dateIssued?: Date;
    /**
     * The date the ticket was used.
     */
    dateUsed?: Date;
    /**
     * チケット識別子
     */
    identifier?: string; // 追加(2024-04-15~)
    /**
     * The organization issuing the ticket or permit.
     */
    issuedBy?: ITicketIssuedBy;
    /**
     * The total price for the reservation or ticket, including applicable taxes, shipping, etc.
     */
    // totalPrice?: T | number;
    /**
     * The currency (in 3-letter ISO 4217 format) of the Reservation's price.
     */
    // priceCurrency?: PriceCurrency;
    /**
     * The seat associated with the ticket.
     * 座席指定でない場合、この値は存在しない
     */
    ticketedSeat?: ISeat;
    /**
     * The unique identifier for the ticket.
     */
    ticketNumber?: string;
    /**
     * If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI,
     * such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes),
     * "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes).
     */
    ticketToken?: string;
    /**
     * オファー
     */
    ticketType: ITicketType;
    /**
     * COA券種情報
     */
    coaTicketInfo?: ICOATicketInfoWithDetails;
    coaReserveAmount?: number;
}
// 最適化(2022-06-06~)
export interface IBroker {
    // 2022-06-03時点で可能性があるのはPersonのみ
    typeOf: PersonType.Person;
    // familyName?: string;
    // givenName?: string;
    id: string;
    identifier?: IPropertyValue<string>[];
    name?: string;
}
export type IProgramMembershipUsed = Pick<IPermit, 'identifier' | 'issuedThrough' | 'project' | 'typeOf'>; // 最適化(2023-09-01~)
// 最適化(2022-09-08~)
export type IServiceTypeOfIssuedThrough = Pick<IServiceType, 'codeValue' | 'inCodeSet' | 'typeOf'>;
export type IServiceLocationContainedInPlace = Pick<MovieTheaterFactory.IPlace, 'typeOf' | 'id' | 'branchCode'> & {
    name?: IMultilingualString;
};
export type IServiceLocation = Pick<ScreeningRoomFactory.IPlace, 'typeOf' | 'branchCode'> & {
    containedInPlace: IServiceLocationContainedInPlace;
    name?: IMultilingualString;
};
export interface IServiceChannel {
    typeOf: 'ServiceChannel';
    serviceLocation: IServiceLocation;
}
export interface IIssuedThrough {
    typeOf: ProductType.Transportation | ProductType.EventService;
    serviceType?: IServiceTypeOfIssuedThrough;
    id: string;
    // serviceLocationを追加(2023-01-06~)
    availableChannel: IServiceChannel;
}
export type IAvailableReservationStatusType =
    ReservationStatusType.ReservationCancelled
    | ReservationStatusType.ReservationConfirmed
    | ReservationStatusType.ReservationPending;
export interface IProvider {
    /**
     * 販売者ID
     */
    id: string;
    typeOf: OrganizationType.Corporation;
}
/**
 * 予約
 * Describes a reservation for travel, dining or an event. Some reservations require tickets.
 * Note: This type is for information about actual reservations,
 * e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * For offers of tickets, restaurant reservations, flights, or rental cars, use Offer.
 * {@link https://schema.org/Reservation}
 */
export interface IReservation<T extends Omit<IPriceSpecification, 'project'>> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    /**
     * type of object
     */
    typeOf: ReservationType;
    /**
     * 予約ID
     */
    id?: string;
    /**
     * Any additional text to appear on a ticket, such as additional privileges or identifiers.
     */
    additionalTicketText?: string;
    /**
     * Who made the reservation.
     * SupersededBy broker(2022-05-13~)
     */
    // bookingAgent?: any;
    /**
     * Date the reservation was made.
     */
    bookingTime?: Date;
    /**
     * An entity that arranges for an exchange between a buyer and a seller.
     * In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.
     */
    broker?: IBroker;
    /**
     * Web page where reservation can be cancelled.
     */
    // cancelReservationUrl?: string;
    /**
     * Webpage where the passenger can check in.
     */
    // checkinUrl?: string;
    /**
     * Web page where reservation can be confirmed.
     */
    // confirmReservationUrl?: string;
    issuedThrough?: IIssuedThrough;
    /**
     * Time the reservation was last modified.
     */
    modifiedTime?: Date;
    /**
     * Web page where reservation can be modified.
     */
    // modifyReservationUrl?: string;
    /**
     * Number of seats if unreserved seating.
     */
    numSeats?: number;
    /**
     * Total price of the Reservation.
     */
    // price?: T | number;
    price?: T;
    /**
     * The currency (in 3-letter ISO 4217 format) of the Reservation's price.
     */
    priceCurrency?: PriceCurrency;
    /**
     * Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
     */
    programMembershipUsed?: IProgramMembershipUsed;
    /**
     * The service provider, service operator, or service performer; the goods producer.
     * Another party (a seller) may offer those services or goods on behalf of the provider.
     * A provider may also serve as the seller.
     */
    provider: IProvider;
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor?: IReservationFor;
    /**
     * The number or id of the reservation.
     */
    reservationNumber?: string;
    /**
     * Current status of the reservation.
     */
    reservationStatus?: IAvailableReservationStatusType;
    /**
     * A ticket associated with the reservation.
     */
    reservedTicket?: ITicket;
    /**
     * The individual reservations included in the package. Typically a repeated property.
     */
    subReservation?: any[];
    /**
     * The person or organization the reservation is for.
     */
    underName?: IUnderName;
    /**
     * チェックイン(発券)済かどうか
     */
    checkedIn?: boolean;
    /**
     * 出席(入場)済かどうか
     */
    attended?: boolean;
    additionalProperty?: IPropertyValue<string>[];
}
/**
 * チケットホルダー検索条件
 */
export interface IUnderNameSearchConditions {
    id?: string;
    name?: string | {
        $options?: string;
        $regex?: string;
    };
    email?: string | {
        $options?: string;
        $regex?: string;
    };
    telephone?: string;
    givenName?: string | {
        $options?: string;
        $regex?: string;
    };
    familyName?: string | {
        $options?: string;
        $regex?: string;
    };
    identifier?: {
        $all?: IPropertyValue<string>[];
        $in?: IPropertyValue<string>[];
        $nin?: IPropertyValue<string>[];
        $elemMatch?: any;
    };
    identifiers?: IPropertyValue<string>[];
}
export type IBrokerSearchConditions = IUnderNameSearchConditions;
/**
 * 予約チケット検索条件
 */
export interface IReservedTicketSearchConditions {
    /**
     * 座席
     */
    ticketedSeat?: {
        seatNumbers?: string[];
        seatRows?: string[];
        seatSections?: string[];
        seatingType?: { $in?: string[] };
    };
    /**
     * 券種
     */
    ticketType?: {
        ids?: string[];
        category?: {
            ids?: string[];
            codeValue?: {
                $in?: string[];
            };
        };
    };
}
export interface IStringSearchConditions {
    $eq?: string;
    $ne?: string;
    $in?: string[];
    $nin?: string[];
    $options?: string;
    $regex?: string;
}
/**
 * ソート条件
 */
export interface ISortOrder {
    modifiedTime?: SortType;
}
export interface IProgramMembershipUsedSearchConditions {
    identifier?: { $eq?: string };
    issuedThrough?: {
        serviceType?: {
            codeValue?: { $eq?: string };
        };
    };
}
export interface IPriceSearchConditions {
    priceComponent?: {
        appliesToMovieTicket?: {
            identifier?: { $eq?: string };
        };
    };
}
/**
 * 検索条件
 */
export interface ISearchConditions<T extends ReservationType> {
    typeOf: T;
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    provider?: {
        id?: { $eq?: string };
    };
    /**
     * IDリスト
     */
    ids?: string[];
    /**
     * ID
     */
    id?: IStringSearchConditions;
    /**
     * 予約番号リスト
     */
    reservationNumbers?: string[];
    /**
     * 予約番号
     */
    reservationNumber?: string | IStringSearchConditions;
    /**
     * 追加チケットテキスト
     */
    additionalTicketText?: string | IStringSearchConditions;
    broker?: IBrokerSearchConditions;
    reservationStatus?: {
        $eq?: IAvailableReservationStatusType;
        $ne?: IAvailableReservationStatusType;
        $in?: IAvailableReservationStatusType[];
    };
    /**
     * 予約ステータスリスト
     */
    reservationStatuses?: IAvailableReservationStatusType[];
    bookingFrom?: Date;
    bookingThrough?: Date;
    modifiedFrom?: Date;
    modifiedThrough?: Date;
    /**
     * 予約チケット
     */
    reservedTicket?: IReservedTicketSearchConditions;
    /**
     * チケットホルダー
     */
    underName?: IUnderNameSearchConditions;
    /**
     * チェックイン(発券)済かどうか
     */
    checkedIn?: boolean;
    /**
     * 出席(入場)済かどうか
     */
    attended?: boolean;
    additionalProperty?: {
        $all?: IPropertyValue<string>[];
        $in?: IPropertyValue<string>[];
        $nin?: IPropertyValue<string>[];
        $elemMatch?: any;
    };
    /**
     * 使用メンバーシップ
     */
    programMembershipUsed?: IProgramMembershipUsedSearchConditions;
    price?: IPriceSearchConditions;
}
