import * as EventFactory from '../event';
import * as ScreeningEventSeriesFactory from '../event/screeningEventSeries';
import EventStatusType from '../eventStatusType';
import EventType from '../eventType';
import ItemAvailability from '../itemAvailability';
import IMultilingualString from '../multilingualString';
import { IOffer } from '../offer';
import OfferType from '../offerType';
import * as MovieTheaterFactory from '../place/movieTheater';
import PlaceType from '../placeType';
import { IPriceSpecification as IVideoFormatChargeSpecification } from '../priceSpecification/videoFormatChargeSpecification';
import * as ReservationFactory from '../reservation';
import SortType from '../sortType';

export type ITicketPriceSpecification = IVideoFormatChargeSpecification;
/**
 * チケットオファーインターフェース
 */
export interface ITicketOffer extends IOffer {
    id: string;
    name: IMultilingualString;
    description: IMultilingualString;
    priceSpecification: ITicketPriceSpecification[];
}
export interface IAcceptedTicketOfferWithoutDetail {
    id: string;
    /**
     * 座席
     */
    ticketedSeat: ReservationFactory.ISeat;
}
export type IAcceptedTicketOffer = IAcceptedTicketOfferWithoutDetail & ITicketOffer;
/**
 * 座席オファーインターフェース
 */
export interface ISeatOffer {
    typeOf: OfferType;
    availability: ItemAvailability;
}
export interface ISeatWithOffer extends MovieTheaterFactory.ISeat {
    offers?: ISeatOffer[];
}
export interface IScreeningRoomSectionOffer extends MovieTheaterFactory.IScreeningRoomSection {
    containsPlace: ISeatWithOffer[];
}
/**
 * 上映イベントに対するオファーインターフェース
 */
export type IOffer = IScreeningRoomSectionOffer;
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
        typeOf: PlaceType;
        /**
         * 場所枝番号
         * スクリーンコードに該当します。
         */
        branchCode: string;
        /**
         * 場所名称
         */
        name: IMultilingualString;
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
     * 券種グループID
     */
    ticketTypeGroup: string;
}
/**
 * 上映イベントインターフェース
 */
export type IEvent = EventFactory.IEvent<IAttributes>;
/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    doorTime?: SortType;
    endDate?: SortType;
    startDate?: SortType;
}
/**
 * 上映イベントの検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * イベント名称
     */
    name?: string;
    /**
     * 開催中 from
     * ISO 8601 date format
     */
    inSessionFrom?: Date;
    /**
     * 開催中 through
     * ISO 8601 date format
     */
    inSessionThrough?: Date;
    /**
     * 開始日時 from
     * ISO 8601 date format
     */
    startFrom?: Date;
    /**
     * 開始日時 through
     * ISO 8601 date format
     */
    startThrough?: Date;
    /**
     * 終了日時 from
     * ISO 8601 date format
     */
    endFrom?: Date;
    /**
     * 終了日時 through
     * ISO 8601 date format
     */
    endThrough?: Date;
    /**
     * イベントステータス
     * イベントがキャンセル、あるいは、延期された場合に主に使用されます。
     */
    eventStatuses?: EventStatusType[];
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
}
