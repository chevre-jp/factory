import * as EventFactory from '../event';
import { EventType } from '../eventType';
import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import { OfferType } from '../offerType';
import { OrganizationType } from '../organizationType';
import { PlaceType } from '../placeType';
import { IServiceType as IProductServiceType, ProductType } from '../product';
import * as ReservationFactory from '../reservation';
import { ReservationType } from '../reservationType';
import * as WebAPIFactory from '../service/webAPI';
// import { IThing } from '../thing';
import { ITripWithDetails as IBusTrip } from '../trip/busTrip';

/**
 * 予約集計
 */
export interface IAggregateReservation {
    typeOf: 'AggregateReservation';
    aggregateDate: Date;
    checkInCount?: number;
    attendeeCount?: number;
    reservationCount?: number;
    useActionCount?: number;
}
/**
 * 予約集計つきオファー
 */
// export interface IOfferWithAggregateReservation extends Pick<IThing, 'name'> {
export interface IOfferWithAggregateReservation {
    typeOf: OfferType.Offer;
    id: string;
    identifier: string;
    aggregateReservation?: Pick<IAggregateReservation, 'typeOf' | 'attendeeCount' | 'checkInCount' | 'reservationCount'>;
    category?: OfferFactory.ICategory;
    maximumAttendeeCapacity?: number;
    remainingAttendeeCapacity?: number;
}
/**
 * オファー集計
 */
export interface IAggregateOffer {
    typeOf: OfferType.AggregateOffer;
    aggregateDate: Date;
    offerCount?: number;
    offers?: IOfferWithAggregateReservation[];
}
export interface IAggregateOfferOfPlace {
    typeOf: OfferType.AggregateOffer;
    offers?: {
        typeOf: OfferType.Offer;
        id: string;
        identifier?: string;
        category?: OfferFactory.ICategory;
        aggregateReservation?: Pick<IAggregateReservation, 'typeOf' | 'useActionCount'>;
    }[];
}
export interface IPlaceWithAggregateOffer {
    typeOf: PlaceType;
    identifier?: string;
    aggregateOffer?: IAggregateOfferOfPlace;
}
/**
 * 入場ゲート集計
 */
export interface IAggregateEntranceGate {
    typeOf: PlaceType.AggregatePlace;
    aggregateDate: Date;
    places: IPlaceWithAggregateOffer[];
}
/**
 * 予約対象
 * 現時点でBusTripのみ
 */
export type IReservationFor = Pick<IBusTrip, 'arrivalBusStop' | 'arrivalTime' | 'busName' | 'busNumber' | 'departureBusStop' | 'departureTime' | 'identifier' | 'typeOf'>;
export interface IServiceOutput {
    typeOf: ReservationType.BusReservation;
    reservationFor: IReservationFor;
    reservedTicket?: {
        typeOf: ReservationFactory.TicketType;
        /**
         * チケットに割り当てられる座席
         * 指定席でない場合、存在しない
         */
        ticketedSeat?: {
            typeOf: PlaceType.Seat;
        };
    };
}
export type IServiceType = IProductServiceType & {
    id?: string;
};
/**
 * 旅客サービス
 */
export interface IItemOffered {
    id: string;
    /**
     * プロダクト名称
     */
    name?: { ja?: string };
    /**
     * サービス区分
     */
    serviceType?: IServiceType;
    /**
     * サービスアウトプット
     */
    serviceOutput: IServiceOutput;
    typeOf: ProductType.Transportation;
    // serviceLocationを追加(2023-01-06~)
    availableChannel: ReservationFactory.IServiceChannel;
}
export type IOfferedThrough = WebAPIFactory.IService<WebAPIFactory.Identifier.Chevre>;
export interface ISellerMakesOffer extends Pick<
    OfferFactory.IOffer,
    'typeOf' | 'availableAtOrFrom' | 'availabilityEnds' | 'availabilityStarts' | 'validFrom' | 'validThrough'
> {
    availabilityEnds: Date;
    availabilityStarts: Date;
    validFrom: Date;
    validThrough: Date;
}
export interface ISeller {
    typeOf: OrganizationType.Corporation;
    /**
     * 販売者ID
     */
    id: string;
    name?: IMultilingualString;
    /**
     * アプリケーションごとのオファー
     */
    makesOffer: ISellerMakesOffer[]; // アプリケーション対応(2022-11-18~)
}
export import IEligibleQuantity = OfferFactory.IEligibleQuantity;
/**
 * イベントに対するオファー
 */
export interface IOffer {
    typeOf: OfferType.Offer;
    /**
     * 情報提供終了日時(オンライン取引アプリケーションの設定)
     * @deprecated Use seller.makesOffer
     */
    availabilityEnds: Date;
    /**
     * 情報提供開始日時(オンライン取引アプリケーションの設定)
     * @deprecated Use seller.makesOffer
     */
    availabilityStarts: Date;
    eligibleQuantity: IEligibleQuantity;
    itemOffered: IItemOffered;
    /**
     * オファー供給サービス
     */
    offeredThrough?: IOfferedThrough;
    /**
     * 販売可能期間from(オンライン取引アプリケーションの設定)
     * @deprecated Use seller.makesOffer
     */
    validFrom: Date;
    /**
     * 販売可能期間through(オンライン取引アプリケーションの設定)
     * @deprecated Use seller.makesOffer
     */
    validThrough: Date;
    unacceptedPaymentMethod?: EventFactory.IUnacceptedPaymentMethodType[];
    seller: ISeller;
}
export interface ILocation {
    typeOf: PlaceType.ScreeningRoom;
    /**
     * ルームコード
     */
    branchCode: string;
    /**
     * 場所名称
     */
    name?: IMultilingualString;
    alternateName?: IMultilingualString;
    description?: IMultilingualString;
    address?: IMultilingualString;
    /**
     * イベント固有のキャパシティ
     * 施設のキャパシティに依存しない場合に使用
     */
    maximumAttendeeCapacity?: number;
}
export type IName = IMultilingualString;
export interface IOrganizer {
    id: string;
}
/**
 * イベント属性
 */
export interface IAttributes extends Pick<
    EventFactory.IAttributes<EventType.Event>,
    'additionalProperty' | 'project' | 'identifier' | 'description' | 'eventStatus' | 'maximumAttendeeCapacity' | 'remainingAttendeeCapacity' | 'location'
    | 'name' | 'doorTime' | 'endDate' | 'startDate' | 'typeOf'
> {
    /**
     * 上映場所
     */
    location: ILocation;
    /**
     * イベント名称
     */
    name: IName;
    /**
     * 開場日時
     * ISO 8601 date format
     */
    doorTime?: Date;
    /**
     * 終了日時(
     * ISO 8601 date format
     */
    endDate: Date;
    /**
     * 開始日時
     * ISO 8601 date format
     */
    startDate: Date;
    /**
     * 販売情報
     */
    offers: IOffer;
    /**
     * 発券数
     */
    checkInCount?: Number;
    /**
     * 参加数
     */
    attendeeCount?: Number;
    /**
     * 入場ゲート集計
     */
    // aggregateEntranceGate?: IAggregateEntranceGate; // 廃止(2024-03-27~)
    /**
     * 予約集計
     */
    aggregateReservation?: IAggregateReservation;
    /**
     * オファー集計
     */
    // aggregateOffer?: IAggregateOffer; // 廃止(2024-03-27~)
    // 必須化(2023-07-12~)
    organizer: IOrganizer;
}
/**
 * イベント
 */
export type IEvent = EventFactory.IEvent<IAttributes>;
export type ILocation4create = Pick<ILocation, 'branchCode' | 'maximumAttendeeCapacity'>;
export type ISeller4create = Pick<
    ISeller,
    'makesOffer'
> & {
    /**
     * POS以外のアプリケーションの共通設定
     */
    makesOfferDefault?: Pick<ISellerMakesOffer, 'typeOf' | 'availabilityEnds' | 'availabilityStarts' | 'validFrom' | 'validThrough'>;
};
export interface IAvailableChannel4create {
    serviceLocation: {
        /**
         * ルームコード
         */
        branchCode: string;
        containedInPlace: {
            /**
             * 施設ID
             */
            id: string;
        };
    };
}
export type IReservationFor4create = Pick<IReservationFor, 'identifier'>;
export type IServiceOutput4create = Pick<IServiceOutput, 'reservedTicket' | 'typeOf'> & {
    reservationFor: IReservationFor4create;
};
export type IItemOffered4create = Pick<IItemOffered, 'id'> & {
    availableChannel: IAvailableChannel4create;
    serviceOutput: IServiceOutput4create;
};
export type IOffers4create = Pick<IOffer, 'unacceptedPaymentMethod'> & {
    /**
     * 最大予約数を指定
     */
    eligibleQuantity: Pick<IEligibleQuantity, 'maxValue'>;
    /**
     * 興行IDと座席有無を指定
     */
    itemOffered: IItemOffered4create;
    /**
     * 販売者IDとアプリケーション設定
     */
    seller: ISeller4create;
};
export type ICreateParams = Pick<
    IAttributes,
    'project' | 'typeOf' | 'doorTime' | 'startDate' | 'endDate' | 'eventStatus' | 'additionalProperty'
> & {
    /**
     * ルームコードとキャパシティを指定
     */
    location: ILocation4create;
    offers: IOffers4create;
};
/**
 * イベント更新パラメータ
 */
export type IUpdateParams = ICreateParams;
/**
 * ソート条件
 */
export type ISortOrder = EventFactory.ISortOrder;
export interface IOfferSearchConditions {
    /**
     * apiリクエストクライアントがseller.makesOffer.$elemMatchに含まれるものを検索
     */
    availableFrom?: Date;
    /**
     * apiリクエストクライアントがseller.makesOffer.$elemMatchに含まれるものを検索
     */
    availableThrough?: Date;
    /**
     * apiリクエストクライアントがseller.makesOffer.$elemMatchに含まれるものを検索
     */
    validFrom?: Date;
    /**
     * apiリクエストクライアントがseller.makesOffer.$elemMatchに含まれるものを検索
     */
    validThrough?: Date;
    itemOffered?: {
        id?: { $in?: string[] };
        serviceType?: {
            ids?: string[];
        };
        serviceOutput?: {
            reservationFor?: {
                arrivalBusStop?: {
                    /**
                     * ターミナルコード
                     */
                    branchCode?: { $eq?: string };
                };
                departureBusStop?: {
                    /**
                     * ターミナルコード
                     */
                    branchCode?: { $eq?: string };
                };
                /**
                 * トリップコード
                 */
                identifier?: { $eq?: string };
            };
            reservedTicket?: {
                ticketedSeat?: {
                    typeOfs?: string[];
                };
            };
        };
        typeOf?: {
            $eq?: ProductType;
        };
    };
    seller?: {
        makesOffer?: {
            $elemMatch?: {
                availabilityEnds?: {
                    $gte?: Date;
                    $lte?: Date;
                };
                availabilityStarts?: {
                    $gte?: Date;
                    $lte?: Date;
                };
                validFrom?: {
                    $gte?: Date;
                    $lte?: Date;
                };
                validThrough?: {
                    $gte?: Date;
                    $lte?: Date;
                };
                'availableAtOrFrom.id'?: {
                    $eq?: string;
                };
            };
        };
    };
}
/**
 * イベント検索条件
 */
export interface ISearchConditions extends EventFactory.ISearchConditions<EventType.Event> {
    location?: {
        /**
         * ルームコード
         */
        branchCode?: {
            $eq?: string;
            $in?: string[];
        };
    };
    /**
     * 販売情報
     */
    offers?: IOfferSearchConditions;
}
