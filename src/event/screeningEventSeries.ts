import type * as COA from '@motionpicture/coa-service';

import { ICreativeWork as IMovie } from '../creativeWork/movie';
import * as EventFactory from '../event';
import { EventType } from '../eventType';
import { ILanguage } from '../language';
import { IMultilingualString } from '../multilingualString';
import { OfferType } from '../offerType';
import { PlaceType } from '../placeType';
// import { PriceCurrency } from '../priceCurrency';

/**
 * 施設コンテンツに対するオファー
 */
export interface IOffer {
    typeOf: OfferType.Offer;
    // 廃止(2023-08-07~)
    // priceCurrency: PriceCurrency.JPY;
    /**
     * 利用不可決済方法区分
     */
    unacceptedPaymentMethod?: string[];
}
export interface IVideoFormat {
    typeOf: string;
    name: string;
}
export interface ISoundFormat {
    typeOf: string;
    name: string;
}
/**
 * コンテンツ
 * contentRatingはCOAのみ存在
 */
export type IWorkPerformed = Pick<
    IMovie,
    'typeOf' | 'id' | 'identifier' | 'name' | 'duration' | 'contentRating'
> & {
    /**
     * 同コンテンツに対する複数施設コンテンツのバージョン
     * identifier+versionでuniqueな想定
     */
    version?: string;
};
export interface IOrganizer {
    /**
     * 販売者ID
     */
    id: string;
}
export interface ICOAInfo {
    titleBranchNum: string;
    /**
     * 映倫区分
     */
    kbnEirin?: COA.factory.master.IKubunNameResult;
    /**
     * 映像区分
     * ２D、３D
     */
    kbnEizou?: COA.factory.master.IKubunNameResult;
    /**
     * 上映方式区分(ＩＭＡＸ，４ＤＸ等)
     */
    kbnJoueihousiki?: COA.factory.master.IKubunNameResult;
    /**
     * 字幕吹替区分(字幕、吹き替え)
     */
    kbnJimakufukikae?: COA.factory.master.IKubunNameResult;
    /**
     * ムビチケ使用フラグ
     * 1：ムビチケ使用対象
     */
    flgMvtkUse: string;
    /**
     * ムビチケ利用開始日
     * ※日付は西暦8桁 "YYYYMMDD"
     */
    dateMvtkBegin: string;
}
export interface ILocation {
    // 不要なので廃止(2022-12-19~)
    // project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: PlaceType.MovieTheater;
    /**
     * 施設ID
     */
    id: string;
    /**
     * コード
     */
    branchCode: string;
    /**
     * 名称
     */
    name?: IMultilingualString;
    /**
     * カナ名称
     */
    kanaName?: string;
}
export interface IAttributes extends Pick<
    EventFactory.IAttributes<EventType.ScreeningEventSeries>,
    'project' | 'typeOf' | 'identifier' | 'name' | 'alternativeHeadline' | 'description'
    | 'duration' | 'endDate' | 'eventStatus' | 'headline' | 'location' | 'offers' | 'startDate'
    | 'workPerformed' | 'additionalProperty'
> {
    /**
     * 字幕利用可能言語
     */
    subtitleLanguage?: ILanguage;
    /**
     * 吹替利用可能言語
     */
    dubLanguage?: ILanguage;
    /**
     * 上映方式
     */
    videoFormat: IVideoFormat[] | COA.factory.master.IKubunNameResult;
    /**
     * 音響方式
     */
    soundFormat: ISoundFormat[];
    /**
     * コンテンツ
     */
    workPerformed: IWorkPerformed;
    /**
     * 施設
     */
    location: ILocation;
    // 必須化(2023-07-12~)
    // organizer?: IOrganizer;
    organizer: IOrganizer;
    /**
     * カナ名称
     */
    kanaName: string;
    /**
     * 名称
     */
    name: IMultilingualString;
    /**
     * 終了日時
     * ISO 8601 date format
     */
    endDate?: Date;
    /**
     * 開始日時
     * ISO 8601 date format
     */
    startDate?: Date;
    /**
     * 販売情報
     */
    offers?: IOffer;
    /**
     * その他COA情報
     * @deprecated 基本的にCinemaSunshineの互換性維持目的であり、そのうち廃止予定
     */
    coaInfo?: ICOAInfo;
}
/**
 * 施設コンテンツ
 */
export type IEvent = EventFactory.IEvent<IAttributes>;
export type ICreateParams =
    // Omit<
    //     IAttributes,
    //     'location' | 'workPerformed' | 'coaInfo' | 'organizer'
    //     // durationの上書き指定を可能にする(2023-07-20~)
    //     // | 'duration'
    //     | 'videoFormat' | 'alternativeHeadline'
    //     | 'project' | 'eventStatus'
    // > &
    // Pickで表現(2023-12-10~)
    Pick<
        IAttributes,
        'typeOf' | 'name' | 'duration' | 'endDate' | 'headline' | 'offers' | 'startDate'
        | 'additionalProperty' | 'kanaName' | 'eventStatus' | 'description'
    > & {
        subtitleLanguage?: Pick<ILanguage, 'name'>;
        dubLanguage?: Pick<ILanguage, 'name'>;
        location: {
            /**
             * 施設ID
             */
            id: string;
        };
        workPerformed: {
            /**
             * コンテンツコード
             */
            identifier: string;
            /**
             * 同コンテンツに対する複数施設コンテンツのバージョン
             * identifier+versionでuniqueな想定
             */
            version?: string;
        };
        videoFormat: {
            /**
             * 上映方式区分コード
             */
            typeOf: string;
        }[];
    };
/**
 * ソート条件
 */
export type ISortOrder = EventFactory.ISortOrder;
/**
 * 検索条件
 */
export interface ISearchConditions extends EventFactory.ISearchConditions<EventType.ScreeningEventSeries> {
    sort?: ISortOrder;
    location?: {
        branchCode?: {
            $eq?: string;
            $in?: string[];
        };
        /**
         * 施設コードリスト
         */
        branchCodes?: string[];
        /**
         * 施設ID
         */
        id?: { $eq?: string };
    };
    videoFormat?: {
        typeOf?: {
            $eq?: string;
            $in?: string[];
        };
    };
    soundFormat?: {
        typeOf?: {
            $eq?: string;
            $in?: string[];
        };
    };
    workPerformed?: {
        /**
         * コンテンツコード
         */
        identifiers?: string[];
        version?: { $eq?: string };
    };
}
