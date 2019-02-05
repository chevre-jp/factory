import * as COA from '@motionpicture/coa-service';

import * as EventFactory from '../event';
import * as ScreeningEventSeriesFactory from '../event/screeningEventSeries';
import EventType from '../eventType';
import ItemAvailability from '../itemAvailability';
import IMultilingualString from '../multilingualString';
import * as OfferFactory from '../offer';
import * as MovieTheaterFactory from '../place/movieTheater';
import PlaceType from '../placeType';
import { IPriceSpecification as ICompoundPriceSpecification } from '../priceSpecification/compoundPriceSpecification';
import { IPriceSpecification as IMovieTicketTypeChargeSpecification } from '../priceSpecification/movieTicketTypeChargeSpecification';
import { IPriceSpecification as ISoundFormatChargeSpecification } from '../priceSpecification/soundFormatChargeSpecification';
import { IPriceSpecification as IUnitPriceSpecification } from '../priceSpecification/unitPriceSpecification';
import { IPriceSpecification as IVideoFormatChargeSpecification } from '../priceSpecification/videoFormatChargeSpecification';
import { IQuantitativeValue } from '../quantitativeValue';
import * as ReservationFactory from '../reservation';
import ReservationType from '../reservationType';
import { IServiceType } from '../serviceType';
import { UnitCode } from '../unitCode';

export interface IServiceOutput {
    typeOf: ReservationType;
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

/**
 * イベントのサービスインターフェース
 */
export interface IService {
    /**
     * 興行区分
     */
    serviceType: IServiceType;
    /**
     * サービスアウトプット
     */
    serviceOutput?: IServiceOutput;
}

/**
 * 上映イベントに対するオファーインターフェース
 */
export interface IOffer extends OfferFactory.IOffer {
    /**
     * オファー(券種)グループID
     */
    id: string;
    name: IMultilingualString;
    /**
     * 情報提供終了日時
     */
    availabilityEnds: Date;
    /**
     * 情報提供開始日時
     */
    availabilityStarts: Date;
    eligibleQuantity: IQuantitativeValue<UnitCode.C62>;
    itemOffered: IService;
    /**
     * 販売可能期間from
     */
    validFrom: Date;
    /**
     * 販売可能期間through
     */
    validThrough: Date;
}

/**
 * 上映イベントに対して有効なチケット価格仕様要素インターフェース
 */
export type ITicketPriceComponent = IMovieTicketTypeChargeSpecification
    | IVideoFormatChargeSpecification
    | IUnitPriceSpecification
    | ISoundFormatChargeSpecification;

/**
 * 上映イベントに対して有効なチケット価格仕様インターフェース
 */
export type ITicketPriceSpecification = ICompoundPriceSpecification<ITicketPriceComponent>;

/**
 * チケットオファーインターフェース
 */
export interface ITicketOffer extends IOffer {
    id: string;
    name: IMultilingualString;
    description: IMultilingualString;
    priceSpecification: ITicketPriceSpecification;
    availability: ItemAvailability;
}

/**
 * 受け入れられたチケットオファー(詳細なし)
 */
export interface IAcceptedTicketOfferWithoutDetail {
    /**
     * オファーID
     * チケットオファー検索結果から選択されたもの
     */
    id: string;
    /**
     * 座席
     * 指定席イベントの場合、座席を指定
     * 自由席イベントの場合、あるいは、最大収容人数がないイベントの場合は、座席指定不要
     */
    ticketedSeat?: ReservationFactory.ISeat;
}

/**
 * 受け入れられたチケットオファー
 */
export type IAcceptedTicketOffer = IAcceptedTicketOfferWithoutDetail & ITicketOffer;

/**
 * 座席オファーインターフェース
 */
export interface ISeatOffer extends OfferFactory.IOffer {
    availability: ItemAvailability;
}

export interface ISeatWithOffer extends MovieTheaterFactory.ISeat {
    offers?: ISeatOffer[];
}

export interface IScreeningRoomSectionOffer extends MovieTheaterFactory.IScreeningRoomSection {
    containsPlace: ISeatWithOffer[];
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
    kbnService?: COA.services.master.IKubunNameResult;
    /**
     * 音響区分
     */
    kbnAcoustic?: COA.services.master.IKubunNameResult;
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

export type IOffer4cinemasunshine = EventFactory.IOffer4cinemasunshine;

/**
 * 上映イベント属性インターフェース
 */
export interface IAttributes extends EventFactory.IAttributes<EventType.ScreeningEvent> {
    /**
     * 上映作品
     */
    workPerformed: ScreeningEventSeriesFactory.IWorkPerformed;
    /**
     * 上映場所
     */
    location: {
        /**
         * 場所タイプ
         */
        typeOf: PlaceType.ScreeningRoom;
        /**
         * 場所枝番号
         * スクリーンコードに該当します。
         */
        branchCode: string;
        /**
         * 場所名称
         */
        name: IMultilingualString;
        alternateName?: IMultilingualString;
        description?: IMultilingualString;
        address?: IMultilingualString;
    };
    /**
     * イベント名称
     */
    name: IMultilingualString;
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
     * 劇場作品に相当
     */
    superEvent: ScreeningEventSeriesFactory.IEvent;
    /**
     * 販売情報
     */
    offers: IOffer | EventFactory.IOffer4cinemasunshine;
    /**
     * 発券数
     */
    checkInCount: Number;
    /**
     * 参加数
     */
    attendeeCount: Number;
    /**
     * その他COA情報
     * @deprecated 基本的にCinemaSunshineの互換性維持目的であり、そのうち廃止予定
     */
    coaInfo?: ICOAInfo;
}

/**
 * 上映イベントインターフェース
 */
export type IEvent = EventFactory.IEvent<IAttributes>;

/**
 * ソート条件インターフェース
 */
export type ISortOrder = EventFactory.ISortOrder;

export interface IOfferSearchConditions {
    ids?: string[];
    availableFrom?: Date;
    availableThrough?: Date;
    validFrom?: Date;
    validThrough?: Date;
}

/**
 * 上映イベントの検索条件インターフェース
 */
export interface ISearchConditions extends EventFactory.ISearchConditions<EventType.ScreeningEvent> {
    /**
     * 親イベント情報
     */
    superEvent?: {
        ids?: string[];
        /**
         * 親イベント(劇場の上映イベント)が実施される場所の識別子リスト
         */
        locationBranchCodes?: string[];
        /**
         * イベントで上演される作品識別子リスト
         */
        workPerformedIdentifiers?: string[];
    };
    /**
     * 販売情報
     */
    offers?: IOfferSearchConditions;
}
