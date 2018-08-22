import * as EventFactory from '../event';
import * as ScreeningEventSeriesFactory from '../event/screeningEventSeries';
import EventStatusType from '../eventStatusType';
import EventType from '../eventType';
import ItemAvailability from '../itemAvailability';
import IMultilingualString from '../multilingualString';
import * as MovieTheaterFactory from '../place/movieTheater';
import PlaceType from '../placeType';

/**
 * 上映イベントの検索条件インターフェース
 */
export interface ISearchConditions {
    /**
     * イベント名称
     */
    name?: string;
    /**
     * 開始日時(in ISO 8601 date format) from
     */
    startFrom?: Date;
    /**
     * 開始日時(in ISO 8601 date format) through
     */
    startThrough?: Date;
    /**
     * 終了日時(in ISO 8601 date format) from
     */
    endFrom?: Date;
    /**
     * 終了日時(in ISO 8601 date format) through
     */
    endThrough?: Date;
    /**
     * イベントステータス
     * イベントがキャンセル、あるいは、延期された場合に主に使用されます。
     */
    eventStatuses?: EventStatusType[];
    /**
     * 親イベント(劇場の上映イベント)が実施される場所の識別子リスト
     */
    superEventLocationIds?: string[];
    /**
     * イベントで上演される作品識別子リスト
     */
    workPerformedIds?: string[];
}
export interface ISeatOffer {
    typeOf: 'Offer';
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
     * 開場日時(in ISO 8601 date format)
     */
    doorTime?: Date;
    /**
     * 終了日時(in ISO 8601 date format)
     */
    endDate: Date;
    /**
     * 開始日時(in ISO 8601 date format)
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
