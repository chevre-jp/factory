import type * as COA from '@motionpicture/coa-service';

import * as EventFactory from '../event';
import * as ScreeningEventSeriesFactory from '../event/screeningEventSeries';
import { EventType } from '../eventType';
import { OfferType } from '../offerType';
import { PlaceType } from '../placeType';
import { IServiceType as IProductServiceType, ProductType } from '../product';
import * as ReservationFactory from '../reservation';
import { ReservationType } from '../reservationType';
import * as WebAPIFactory from '../service/webAPI';
import * as AnyEventFactory from './anyEvent';

export import IAggregateReservation = AnyEventFactory.IAggregateReservation;
export import IOfferWithAggregateReservation = AnyEventFactory.IOfferWithAggregateReservation;
export import IAggregateOffer = AnyEventFactory.IAggregateOffer;
export import IPlaceWithAggregateOffer = AnyEventFactory.IPlaceWithAggregateOffer;
export import IAggregateEntranceGate = AnyEventFactory.IAggregateEntranceGate;
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
    serviceOutput?: IServiceOutput;
    typeOf: ProductType.EventService;
    // serviceLocationを追加(2023-01-06~)
    availableChannel: ReservationFactory.IServiceChannel;
}
export type IOfferedThrough = WebAPIFactory.IService<WebAPIFactory.Identifier>;
export import ISellerMakesOffer = AnyEventFactory.ISellerMakesOffer;
export import ISeller = AnyEventFactory.ISeller;
export import IEligibleQuantity = AnyEventFactory.IEligibleQuantity;
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
export type IOffer4COA = Pick<IOffer, 'typeOf' | 'offeredThrough'> & {
    // 追加(2023-06-20~)
    itemOffered: {
        serviceOutput: Pick<IServiceOutput, 'reservedTicket'>;
    };

};
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
export import ILocation = AnyEventFactory.ILocation;
export type ISuperEvent = Pick<
    ScreeningEventSeriesFactory.IEvent,
    'typeOf' | 'id' | 'videoFormat' | 'soundFormat' | 'workPerformed' | 'location'
    | 'kanaName' | 'name' | 'additionalProperty' | 'startDate' | 'endDate' | 'description' | 'headline'
    | 'dubLanguage' | 'subtitleLanguage'
    // ↓COAのみ
    | 'identifier' | 'alternativeHeadline' | 'duration' | 'coaInfo'
>;
export import IName = AnyEventFactory.IName;
/**
 * イベント属性
 */
// alternateName ?: IMultilingualString;
// alternativeHeadline ?: IMultilingualString | string;
// duration ?: string;
// headline ?: IMultilingualString;
export interface IAttributes extends Pick<
    AnyEventFactory.IAttributes,
    'additionalProperty' | 'project' | 'identifier' | 'description' | 'eventStatus' | 'maximumAttendeeCapacity' | 'remainingAttendeeCapacity' | 'location'
    | 'name' | 'doorTime' | 'endDate' | 'startDate' | 'aggregateEntranceGate' | 'aggregateReservation' | 'aggregateOffer' | 'organizer'
    | 'checkInCount' | 'attendeeCount'
> {
    /**
     * 親イベント
     * 施設コンテンツに相当
     */
    superEvent: ISuperEvent;
    /**
     * 販売情報
     */
    offers: IOffer | IOffer4COA;
    /**
     * その他COA情報
     * 基本的にsskts対応
     */
    coaInfo?: ICOAInfo;
    typeOf: EventType.ScreeningEvent;
}
/**
 * イベント
 */
export type IEvent = EventFactory.IEvent<IAttributes>;
export import ILocation4create = AnyEventFactory.ILocation4create;
export import ISeller4create = AnyEventFactory.ISeller4create;
export type ISuperEvent4create = Pick<ISuperEvent, 'id'>;
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
    /**
     * 施設コンテンツIDを指定
     */
    superEvent: ISuperEvent4create;
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
export interface ISearchConditions extends EventFactory.ISearchConditions<EventType.ScreeningEvent> {
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
