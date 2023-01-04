import * as EventFactory from '../event';
import { EventType } from '../eventType';
import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import { OfferType } from '../offerType';
import { OrganizationType } from '../organizationType';
import { PlaceType } from '../placeType';
import { PriceCurrency } from '../priceCurrency';
import { IServiceType as IProductServiceType, ProductType } from '../product';
import { IQuantitativeValue } from '../quantitativeValue';
import * as ReservationFactory from '../reservation';
import { ReservationType } from '../reservationType';
import * as WebAPIFactory from '../service/webAPI';
import { IThing } from '../thing';
import { ITrip as IBusTrip } from '../trip/busTrip';
import { UnitCode } from '../unitCode';

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
export interface IOfferWithAggregateReservation extends Pick<IThing, 'name'> {
    typeOf: OfferType.Offer;
    id?: string;
    identifier?: string;
    aggregateReservation?: IAggregateReservation;
    category?: OfferFactory.ICategory;
    maximumAttendeeCapacity?: number;
    remainingAttendeeCapacity?: number;
}
/**
 * オファー集計
 */
export interface IAggregateOffer {
    typeOf: OfferType.AggregateOffer;
    offerCount?: number;
    offers?: IOfferWithAggregateReservation[];
}
export interface IPlaceWithAggregateOffer {
    typeOf: PlaceType;
    identifier?: string;
    aggregateOffer?: {
        typeOf: OfferType.AggregateOffer;
        offers?: {
            typeOf: OfferType.Offer;
            id?: string;
            identifier?: string;
            category?: OfferFactory.ICategory;
            aggregateReservation?: IAggregateReservation;
        }[];
    };
}
/**
 * 入場ゲート集計
 */
export interface IAggregateEntranceGate {
    typeOf: PlaceType.AggregatePlace;
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
    id?: string;
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
    serviceOutput?: IServiceOutput;
    typeOf: ProductType.Transportation;
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
    id: string;
    name?: string | IMultilingualString;
    // アプリケーション対応(2022-11-18~)
    makesOffer: ISellerMakesOffer[];
}
export type IEligibleQuantity = Pick<IQuantitativeValue<UnitCode.C62>, 'maxValue' | 'typeOf' | 'unitCode' | 'value'>;
/**
 * イベントに対するオファー
 */
export interface IOffer {
    typeOf: OfferType.Offer;
    priceCurrency: PriceCurrency.JPY;
    /**
     * 情報提供終了日時(オンライン取引アプリケーションの設定)
     */
    availabilityEnds: Date;
    /**
     * 情報提供開始日時(オンライン取引アプリケーションの設定)
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
     */
    validFrom: Date;
    /**
     * 販売可能期間through(オンライン取引アプリケーションの設定)
     */
    validThrough: Date;
    unacceptedPaymentMethod?: string[];
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
/**
 * イベント属性
 */
export interface IAttributes extends EventFactory.IAttributes<EventType.Event> {
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
    offers?: IOffer;
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
    aggregateEntranceGate?: IAggregateEntranceGate;
    /**
     * 予約集計
     */
    aggregateReservation?: IAggregateReservation;
    /**
     * オファー集計
     */
    aggregateOffer?: IAggregateOffer;
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
export type IOffers4create = Pick<
    IOffer,
    'unacceptedPaymentMethod'
> & {
    /**
     * 最大予約数を指定
     */
    eligibleQuantity: Pick<IEligibleQuantity, 'maxValue'>;
    /**
     * 興行IDと座席有無を指定
     */
    itemOffered: Pick<IItemOffered, 'id' | 'serviceOutput'>;
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
        };
    };
    /**
     * 販売情報
     */
    offers?: IOfferSearchConditions;
}
