import CreativeWorkType from '../creativeWorkType';
import * as EventFactory from '../event';
import EventStatusType from '../eventStatusType';
import EventType from '../eventType';
import IMultilingualString from '../multilingualString';
import OrganizationType from '../organizationType';
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
     */
    eventStatuses?: EventStatusType[];
    /**
     * イベント(劇場の上映イベント)が実施される場所の識別子リスト
     */
    locationIds?: string[];
    /**
     * イベントで上演される作品識別子リスト
     */
    workPerformedIds?: string[];
}
/**
 * performed work interface
 * 上映作品インターフェース
 */
export interface IWorkPerformed {
    /**
     * 作品識別子
     */
    identifier: string;
    /**
     * 作品原題
     */
    name: string;
    /**
     * 上映時間
     */
    duration: string;
    /**
     * 映倫区分(PG12,R15,R18)
     */
    contentRating?: string;
    /**
     * スキーマタイプ
     */
    typeOf: CreativeWorkType;
}

export interface IOrganizer {
    typeOf: OrganizationType;
    identifier: string;
    name: IMultilingualString;
}
export interface IAttributes extends EventFactory.IAttributes<EventType.ScreeningEventSeries> {
    /**
     * 字幕利用可能言語
     */
    subtitleLanguage?: string;
    /**
     * 映像区分(２D、３D)
     */
    videoFormat?: string;
    /**
     * 上映作品
     */
    workPerformed: IWorkPerformed;
    /**
     * 上映場所
     */
    location: {
        /**
         * スキーマタイプ
         */
        typeOf: PlaceType;
        /**
         * 場所ID
         */
        id: string;
        /**
         * 劇場コード
         */
        branchCode: string;
        /**
         * 場所名称
         */
        name: IMultilingualString;
        /**
         * 場所名称(カナ)
         */
        kanaName: string;
    };
    organizer?: IOrganizer;
    /**
     * 作品タイトル名（カナ）
     */
    kanaName: string;
    /**
     * 作品タイトル名省略
     */
    alternativeHeadline: string;
    /**
     * イベント名称
     */
    name: IMultilingualString;
    /**
     * 公演終了予定日(in ISO 8601 date format)
     */
    endDate?: Date;
    /**
     * 公演開始予定日(in ISO 8601 date format)
     */
    startDate?: Date;
}
/**
 * 上映イベントインターフェース
 * 劇場作品に相当
 */
export type IEvent = EventFactory.IEvent<IAttributes>;
