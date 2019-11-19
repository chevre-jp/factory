import * as COA from '@motionpicture/coa-service';

import { IOffer } from './offer';
import PlaceType from './placeType';
import PriceCurrency from './priceCurrency';
import { IPriceSpecification as IGenericPriceSpecification } from './priceSpecification';
import PriceSpecificationType from './priceSpecificationType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { ISeatingType } from './qualitativeValue/seatingType';
import ReservationStatusType from './reservationStatusType';
import ReservationType from './reservationType';
import SortType from './sortType';
import { ITicketType } from './ticketType';

export type TicketType = 'Ticket';

export type IPriceSpecification = IGenericPriceSpecification<PriceSpecificationType>;

export type ISeatingType = ISeatingType;

/**
 * under name interface
 */
export interface IUnderName {
    typeOf: string;
    name: string;
    additionalName?: string;
    address?: string;
    age?: string;
    description?: string;
    email?: string;
    familyName?: string;
    gender?: string;
    givenName?: string;
    id?: string;
    identifier?: IPropertyValue<string>[];
    telephone?: string;
    url?: string;
}

/**
 * seat interface
 */
export interface ISeat {
    typeOf: PlaceType;
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
export type ICOATicketInfoWithDetails = COA.services.reserve.IUpdReserveTicket & {
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
export interface ITicket<T extends IPriceSpecification> {
    typeOf: TicketType;
    /**
     * The date the ticket was issued.
     */
    dateIssued?: Date;
    /**
     * The organization issuing the ticket or permit.
     */
    issuedBy?: IUnderName;
    /**
     * The total price for the reservation or ticket, including applicable taxes, shipping, etc.
     */
    totalPrice?: T | number;
    /**
     * The currency (in 3-letter ISO 4217 format) of the Reservation's price.
     */
    priceCurrency?: PriceCurrency;
    /**
     * The seat associated with the ticket.
     * 座席指定でない場合、この値は存在しない
     */
    ticketedSeat?: ISeat;
    /**
     * Where the ticket can be downloaded.
     */
    ticketDownloadUrl?: string;
    /**
     * The number or id of the ticket.
     */
    ticketNumber?: string;
    /**
     * Where the ticket can be printed.
     */
    ticketPrintUrl?: string;
    /**
     * If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI,
     * such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes),
     * "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes).
     */
    ticketToken?: string;
    /**
     * The person or organization the reservation is for.
     */
    underName?: IUnderName;
    /**
     * 券種
     */
    ticketType: ITicketType;
    /**
     * COA券種情報
     */
    coaTicketInfo?: ICOATicketInfoWithDetails;
}

/**
 * 予約インターフェース
 * Describes a reservation for travel, dining or an event. Some reservations require tickets.
 * Note: This type is for information about actual reservations,
 * e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * For offers of tickets, restaurant reservations, flights, or rental cars, use Offer.
 * @see https://schema.org/Reservation
 */
export interface IReservation<T extends IPriceSpecification> {
    project: IProject;
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
     */
    bookingAgent?: any;
    /**
     * Date the reservation was made.
     */
    bookingTime?: Date;
    /**
     * Web page where reservation can be cancelled.
     */
    cancelReservationUrl?: string;
    /**
     * Webpage where the passenger can check in.
     */
    checkinUrl?: string;
    /**
     * Web page where reservation can be confirmed.
     */
    confirmReservationUrl?: string;
    /**
     * Time the reservation was last modified.
     */
    modifiedTime?: Date;
    /**
     * Web page where reservation can be modified.
     */
    modifyReservationUrl?: string;
    /**
     * Number of seats if unreserved seating.
     */
    numSeats?: number;
    /**
     * Total price of the Reservation.
     */
    price?: T | number;
    /**
     * The currency (in 3-letter ISO 4217 format) of the Reservation's price.
     */
    priceCurrency?: PriceCurrency;
    /**
     * Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
     */
    programMembershipUsed?: string;
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
    reservationStatus?: ReservationStatusType;
    /**
     * A ticket associated with the reservation.
     */
    reservedTicket?: ITicket<T>;
    /**
     * The person or organization the reservation is for.
     */
    underName?: IUnderName;
    /**
     * チェックイン(発券)済かどうか
     */
    checkedIn?: Boolean;
    /**
     * 出席(入場)済かどうか
     */
    attended?: Boolean;
    additionalProperty?: IPropertyValue<string>[];
    /**
     * An additional offer that can only be obtained in combination with the first base offer
     * (e.g. supplements and extensions that are available for a surcharge).
     */
    addOn?: IOffer[];
}

/**
 * チケットホルダー検索条件インターフェース
 */
export interface IUnderNameSearchConditions {
    id?: string;
    name?: string;
    email?: string;
    telephone?: string;
    givenName?: string;
    familyName?: string;
    identifier?: {
        $all?: IPropertyValue<string>[];
        $in?: IPropertyValue<string>[];
        $nin?: IPropertyValue<string>[];
        $elemMatch?: any;
    };
    identifiers?: IPropertyValue<string>[];
}

/**
 * 予約チケット検索条件インターフェース
 */
export interface IReservedTicketSearchConditions {
    /**
     * 座席
     */
    ticketedSeat?: {
        seatNumbers?: string[];
        seatRows?: string[];
        seatSections?: string[];
    };
    /**
     * 券種
     */
    ticketType?: {
        ids?: string[];
        category?: {
            ids?: string[];
        };
    };
}

export interface IStringSearchConditions {
    $eq?: string;
    $ne?: string;
    $in?: string[];
    $nin?: string[];
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    modifiedTime?: SortType;
}

/**
 * 検索条件
 */
export interface ISearchConditions<T extends ReservationType> {
    typeOf: T;
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { ids?: string[] };
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
    /**
     * 予約ステータスリスト
     */
    reservationStatuses?: ReservationStatusType[];
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
    checkedIn?: Boolean;
    /**
     * 出席(入場)済かどうか
     */
    attended?: Boolean;
    additionalProperty?: {
        $all?: IPropertyValue<string>[];
        $in?: IPropertyValue<string>[];
        $nin?: IPropertyValue<string>[];
        $elemMatch?: any;
    };
}
