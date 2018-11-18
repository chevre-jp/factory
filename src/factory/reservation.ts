import PlaceType from './placeType';
import PriceCurrency from './priceCurrency';
import { IPriceSpecification } from './priceSpecification';
import PriceSpecificationType from './priceSpecificationType';
import { IPropertyValue } from './propertyValue';
import ReservationStatusType from './reservationStatusType';
import ReservationType from './reservationType';
import { ITicketType } from './ticketType';
import { IURL } from './url';

export type TicketType = 'Ticket';

/**
 * under name interface
 */
export interface IUnderName {
    typeOf: string;
    name: string;
    additionalName?: string;
    identifier?: IPropertyValue<string>[];
    email?: string;
    familyName?: string;
    gender?: string;
    givenName?: string;
    telephone?: string;
}

/**
 * seat interface
 */
export interface ISeat {
    typeOf: PlaceType;
    /**
     * The cabin/class of the seat.
     */
    seatingType: string;
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
 * 予約チケット情報
 */
export interface ITicket<T extends IPriceSpecification<PriceSpecificationType>> {
    typeOf: TicketType;
    /**
     * The date the ticket was issued.
     */
    dateIssued: Date;
    /**
     * The organization issuing the ticket or permit.
     */
    issuedBy: IUnderName;
    /**
     * The total price for the reservation or ticket, including applicable taxes, shipping, etc.
     */
    totalPrice: T;
    /**
     * The currency (in 3-letter ISO 4217 format) of the Reservation's price.
     */
    priceCurrency: PriceCurrency;
    /**
     * The seat associated with the ticket.
     */
    ticketedSeat: ISeat;
    /**
     * Where the ticket can be downloaded.
     */
    ticketDownloadUrl?: IURL;
    /**
     * The number or id of the ticket.
     */
    ticketNumber?: string;
    /**
     * Where the ticket can be printed.
     */
    ticketPrintUrl?: IURL;
    /**
     * If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI,
     * such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes),
     * "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes).
     */
    ticketToken?: string;
    /**
     * The person or organization the reservation is for.
     */
    underName: IUnderName;
    /**
     * 券種
     */
    ticketType: ITicketType;
}

/**
 * 予約インターフェース
 * Describes a reservation for travel, dining or an event. Some reservations require tickets.
 * Note: This type is for information about actual reservations,
 * e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * For offers of tickets, restaurant reservations, flights, or rental cars, use Offer.
 * @see https://schema.org/Reservation
 */
export interface IReservation<T extends IPriceSpecification<PriceSpecificationType>> {
    /**
     * type of object
     */
    typeOf: ReservationType;
    /**
     * 予約ID
     */
    id: string;
    /**
     * Any additional text to appear on a ticket, such as additional privileges or identifiers.
     */
    additionalTicketText: string;
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
    cancelReservationUrl?: IURL;
    /**
     * Webpage where the passenger can check in.
     */
    checkinUrl?: IURL;
    /**
     * Web page where reservation can be confirmed.
     */
    confirmReservationUrl?: IURL;
    /**
     * Time the reservation was last modified.
     */
    modifiedTime: Date;
    /**
     * Web page where reservation can be modified.
     */
    modifyReservationUrl?: IURL;
    /**
     * Number of seats if unreserved seating.
     */
    numSeats: number;
    /**
     * Total price of the Reservation.
     */
    price: T;
    /**
     * The currency (in 3-letter ISO 4217 format) of the Reservation's price.
     */
    priceCurrency: PriceCurrency;
    /**
     * Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
     */
    programMembershipUsed?: string;
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: any;
    /**
     * 予約番号
     */
    reservationNumber: string;
    /**
     * Current status of the reservation.
     */
    reservationStatus: ReservationStatusType;
    /**
     * A ticket associated with the reservation.
     */
    reservedTicket: ITicket<T>;
    /**
     * The person or organization the reservation is for.
     */
    underName: IUnderName;
    /**
     * チェックイン(発券)済かどうか
     */
    checkedIn: Boolean;
    /**
     * 出席(入場)済かどうか
     */
    attended: Boolean;
}
