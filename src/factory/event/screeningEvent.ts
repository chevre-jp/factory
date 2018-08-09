import * as _ from 'lodash';

import ArgumentError from '../error/argument';

import * as EventFactory from '../event';
import * as ScreeningEventSeriesFactory from '../event/screeningEventSeries';
import EventStatusType from '../eventStatusType';
import EventType from '../eventType';
import IMultilingualString from '../multilingualString';
import PlaceType from '../placeType';

/**
 * search conditions interface
 * 個々の上映イベントの検索条件インターフェース
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

/**
 * item availability interface
 * 上映イベント空席状況表現インターフェース
 * 表現を変更する場合、このインターフェースを変更して対応する
 */
export type IItemAvailability = number;

/**
 * 座席数から在庫状況表現を生成する
 * @param numberOfAvailableSeats 空席数
 * @param numberOfAllSeats 全座席数
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
export function createItemAvailability(numberOfAvailableSeats: number, numberOfAllSeats: number): IItemAvailability {
    if (!_.isInteger(numberOfAvailableSeats)) {
        throw new ArgumentError('numberOfAvailableSeats', 'numberOfAvailableSeats must be number.');
    }
    if (!_.isInteger(numberOfAllSeats)) {
        throw new ArgumentError('numberOfAllSeats', 'numberOfAllSeats must be number.');
    }

    if (numberOfAllSeats === 0) {
        return 0;
    }

    // 残席数より空席率を算出
    // tslint:disable-next-line:no-magic-numbers
    return Math.floor(numberOfAvailableSeats / numberOfAllSeats * 100);
}

/**
 * event offer interface
 */
export interface IOffer {
    typeOf: string;
    availability: IItemAvailability | null;
    url: string;
}

/**
 * event with offer interface
 */
export type IEventWithOffer = IEvent & {
    offer: IOffer;
};
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
 * 個々の上映イベントインターフェース
 */
export type IEvent = EventFactory.IEvent<IAttributes>;
