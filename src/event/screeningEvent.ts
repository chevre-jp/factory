import * as COA from '@motionpicture/coa-service';

import * as EventFactory from '../event';
import * as ScreeningEventSeriesFactory from '../event/screeningEventSeries';
import { EventType } from '../eventType';
import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import { OfferType } from '../offerType';
import { OrganizationType } from '../organizationType';
import { PlaceType } from '../placeType';
import { PriceCurrency } from '../priceCurrency';
import { IServiceType as IProductServiceType } from '../product';
import { IProject } from '../project';
import { IQuantitativeValue } from '../quantitativeValue';
import * as ReservationFactory from '../reservation';
import { ReservationType } from '../reservationType';
import * as WebAPIFactory from '../service/webAPI';
import { IThing } from '../thing';
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
export interface IServiceOutput {
    typeOf: ReservationType.EventReservation;
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
 * 興行
 */
export interface IItemOffered {
    // 興行IDを追加(2022-08-31~)
    id?: string;
    /**
     * 興行名称
     */
    name?: { ja?: string };
    /**
     * 興行区分
     */
    serviceType?: IServiceType;
    /**
     * サービスアウトプット
     */
    serviceOutput?: IServiceOutput;
}
export type IOfferedThrough = WebAPIFactory.IService<WebAPIFactory.Identifier>;
export interface ISeller {
    typeOf: OrganizationType.Corporation;
    id: string;
    name?: string | IMultilingualString;
}
export type IEligibleQuantity = Pick<IQuantitativeValue<UnitCode.C62>, 'maxValue' | 'typeOf' | 'unitCode' | 'value'>;
/**
 * イベントに対するオファー
 */
export interface IOffer {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: OfferType.Offer;
    priceCurrency: PriceCurrency.JPY;
    /**
     * 情報提供終了日時
     */
    availabilityEnds: Date;
    /**
     * 情報提供開始日時
     */
    availabilityStarts: Date;
    eligibleQuantity: IEligibleQuantity;
    itemOffered: IItemOffered;
    /**
     * オファー供給サービス
     */
    offeredThrough?: IOfferedThrough;
    /**
     * 販売可能期間from
     */
    validFrom: Date;
    /**
     * 販売可能期間through
     */
    validThrough: Date;
    unacceptedPaymentMethod?: string[];
    seller: ISeller;
}
export type IOffer4COA = Pick<IOffer, 'project' | 'typeOf' | 'offeredThrough' | 'priceCurrency'>;
export import ITicketPriceComponent = OfferFactory.ITicketPriceComponent;
export import ITicketPriceSpecification = OfferFactory.ITicketPriceSpecification;
/**
 * チケットオファー
 */
export interface ITicketOffer extends OfferFactory.IOffer {
    identifier: string;
    priceSpecification: ITicketPriceSpecification;
    itemOffered?: OfferFactory.IItemOffered;
}
export interface ICOAInfo {
    theaterCode: string;
    dateJouei: string;
    titleCode: string;
    titleBranchNum: string;
    timeBegin: string;
    timeEnd: string;
    screenCode: string;
    /**
     * トレーラー時間
     * トレーラー含む本編以外の時間（分）
     */
    trailerTime: number;
    /**
     * サービス区分
     * 「通常興行」「レイトショー」など
     */
    kbnService?: COA.factory.master.IKubunNameResult;
    /**
     * 音響区分
     */
    kbnAcoustic?: COA.factory.master.IKubunNameResult;
    /**
     * サービスデイ名称
     * 「映画の日」「レディースデイ」など ※割引区分、割引コード、特定日等の組み合わせで登録するため名称で連携の方が容易
     */
    nameServiceDay: string;
    /**
     * 購入可能枚数
     */
    availableNum: number;
    /**
     * 予約開始日
     * 予約可能になる日付(YYYYMMDD)
     */
    rsvStartDate: string;
    /**
     * 予約終了日
     * 予約終了になる日付(YYYYMMDD)
     */
    rsvEndDate: string;
    /**
     * 先行予約フラグ
     * 先行予約の場合は'1'、それ以外は'0'
     */
    flgEarlyBooking: string;
}
/**
 * COA券種情報
 */
export type ICOAOffer = COA.factory.reserve.IUpdReserveTicket & {
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
export type IWorkPerformed = ScreeningEventSeriesFactory.IWorkPerformed;
export interface ILocation {
    project: Pick<IProject, 'id' | 'typeOf'>;
    /**
     * 場所タイプ
     */
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
export type ISuperEvent = Omit<ScreeningEventSeriesFactory.IEvent, 'eventStatus' | 'offers' | 'organizer'>;
export type IName = IMultilingualString;
/**
 * イベント属性
 */
export interface IAttributes extends EventFactory.IAttributes<EventType.ScreeningEvent> {
    /**
     * コンテンツ
     */
    workPerformed?: IWorkPerformed;
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
     * 親イベント
     * 施設コンテンツに相当
     */
    superEvent: ISuperEvent;
    /**
     * 販売情報
     */
    offers?: IOffer | IOffer4COA;
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
    /**
     * その他COA情報
     * 基本的にsskts対応
     */
    coaInfo?: ICOAInfo;
}
/**
 * イベント
 */
export type IEvent = EventFactory.IEvent<IAttributes>;
export type ILocation4create = Pick<ILocation, 'branchCode' | 'maximumAttendeeCapacity'>;
export type ISuperEvent4create = Pick<ISuperEvent, 'id'>;
export type IOffers4create = Pick<
    IOffer,
    'availabilityEnds' | 'availabilityStarts' | 'validFrom' | 'validThrough' | 'unacceptedPaymentMethod'
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
     * 販売者IDを指定
     */
    seller: Pick<ISeller, 'id'>;
};
export type ICreateParams = Pick<
    IAttributes,
    'project' | 'typeOf' | 'doorTime' | 'startDate' | 'endDate' | 'eventStatus' | 'additionalProperty'
> & {
    /**
     * ルームコードとキャパシティを指定
     */
    location: ILocation4create;
    /**
     * 施設コンテンツIDを指定
     */
    superEvent: ISuperEvent4create;
    offers: IOffers4create;
};
/**
 * ソート条件
 */
export type ISortOrder = EventFactory.ISortOrder;
export interface IOfferSearchConditions {
    availableFrom?: Date;
    availableThrough?: Date;
    validFrom?: Date;
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
    };
}
/**
 * イベント検索条件
 */
export interface ISearchConditions extends EventFactory.ISearchConditions<EventType.ScreeningEvent> {
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
    superEvent?: {
        ids?: string[];
        location?: {
            id?: {
                $eq?: string;
            };
        };
        /**
         * 施設コンテンツの施設コードリスト
         */
        locationBranchCodes?: string[];
        /**
         * 施設コンテンツのコンテンツコードリスト
         */
        workPerformedIdentifiers?: string[];
    };
}
