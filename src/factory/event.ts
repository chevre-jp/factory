import * as CreativeWorkFactory from './creativeWork';
import EventStatusType from './eventStatusType';
import EventType from './eventType';
import IMultilingualString from './multilingualString';
import * as OfferFactory from './offer';
import * as PlaceFactory from './place';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import SortType from './sortType';

export interface IHasOfferCatalog {
    typeOf: 'OfferCatalog';
    id?: string;
}

export interface IAttributes<T extends EventType> {
    project: IProject;
    /**
     * イベントタイプ
     */
    typeOf: T;
    /**
     * イベント識別子
     */
    identifier?: any;
    /**
     * イベント名称
     */
    name: IMultilingualString;
    alternateName?: IMultilingualString;
    alternativeHeadline?: IMultilingualString | string;
    /**
     * イベント説明
     */
    description?: IMultilingualString;
    /**
     * 開場日時
     * ISO 8601 date format
     */
    doorTime?: Date;
    /**
     * イベント上演時間
     * ISO 8601 date format
     */
    duration?: string;
    /**
     * 終了日時
     * ISO 8601 date format
     */
    endDate?: Date;
    /**
     * イベントステータス
     * イベントがキャンセル、あるいは、延期された場合に主に使用されます。
     */
    eventStatus: EventStatusType;
    /**
     * Indicates an OfferCatalog listing for this Organization, Person, or Service.
     */
    hasOfferCatalog?: IHasOfferCatalog;
    headline?: IMultilingualString;
    /**
     * イベントが実行される場所
     */
    location?: PlaceFactory.IPlace;
    /**
     * 最大収容人数
     */
    maximumAttendeeCapacity?: number;
    /**
     * An offer to provide this item—for example, an offer to sell a product,
     * rent the DVD of a movie, perform a service, or give away tickets to an event.
     */
    offers?: OfferFactory.IOffer | OfferFactory.IOffer[];
    /**
     * 残り収容人数
     */
    remainingAttendeeCapacity?: number;
    /**
     * 開始日時
     * ISO 8601 date format
     */
    startDate?: Date;
    /**
     * イベントで上演される作品
     */
    workPerformed?: CreativeWorkFactory.ICreativeWork;
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * イベントインターフェース
 */
export type IEvent<T extends IAttributes<EventType>> = T & {
    id: string;
};

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    name?: string;
    doorTime?: SortType;
    endDate?: SortType;
    startDate?: SortType;
}

export interface ISearchConditions<T extends EventType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    id?: {
        $in?: string[];
    };
    project?: {
        id?: { $eq?: string };
    };
    /**
     * イベントタイプ
     */
    typeOf: T;
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
     */
    eventStatuses?: EventStatusType[];
    location?: {
        branchCode?: {
            $eq?: string;
        };
        /**
         * 場所の識別子リスト
         */
        branchCodes?: string[];
    };
    superEvent?: {
        ids?: string[];
        location?: {
            id?: {
                $eq?: string;
            };
        };
        /**
         * 親イベント(劇場の上映イベント)が実施される場所の識別子リスト
         */
        locationBranchCodes?: string[];
        /**
         * イベントで上演される作品識別子リスト
         */
        workPerformedIdentifiers?: string[];
    };
    hasOfferCatalog?: {
        id?: {
            $eq?: string;
        };
    };
}
