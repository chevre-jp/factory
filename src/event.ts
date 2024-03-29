import * as CreativeWorkFactory from './creativeWork';
import { EventStatusType } from './eventStatusType';
import { EventType } from './eventType';
import { IMultilingualString } from './multilingualString';
import * as OfferFactory from './offer';
import * as PlaceFactory from './place';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { SortType } from './sortType';

export type IUnacceptedPaymentMethodType = 'MovieTicket';
export type IOffer = Pick<
    OfferFactory.IOffer,
    'typeOf' | 'unacceptedPaymentMethod' | 'seller' | 'eligibleQuantity' | 'itemOffered' | 'offeredThrough'
>;

export interface IAttributes<T extends EventType> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    /**
     * イベントタイプ
     */
    typeOf: T;
    /**
     * イベント識別子
     */
    identifier?: string;
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
    headline?: IMultilingualString;
    /**
     * イベントが実行される場所
     */
    location?: Omit<PlaceFactory.IPlace, 'project'>;
    /**
     * 最大収容人数
     */
    maximumAttendeeCapacity?: number;
    /**
     * An offer to provide this item—for example, an offer to sell a product,
     * rent the DVD of a movie, perform a service, or give away tickets to an event.
     */
    offers?: IOffer | IOffer[];
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
     * イベントで上演されるコンテンツ
     */
    workPerformed?: CreativeWorkFactory.ICreativeWork;
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * イベント
 */
export type IEvent<T extends IAttributes<EventType>> = T & {
    id: string;
};

/**
 * ソート条件
 */
export interface ISortOrder {
    startDate?: SortType;
}

export interface ISearchConditions<T extends EventType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    id?: {
        $eq?: string;
        $in?: string[];
    };
    organizer?: {
        id?: { $eq?: string };
    };
    project?: {
        id?: { $eq?: string };
    };
    /**
     * イベントタイプ
     */
    typeOf?: T;
    // $inでの検索を可能にする(2023-07-13~)
    typeOfIn?: EventType[];
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
    hasOfferCatalog?: {
        id?: {
            $eq?: string;
        };
    };
    additionalProperty?: {
        $elemMatch?: {
            name?: {
                /**
                 * 一致する名称の追加特性がひとつでも存在する
                 */
                $eq?: string;
            };
        };
    };
}
