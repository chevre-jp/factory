import * as COA from '@motionpicture/coa-service';

import { ICreativeWork as IMovie } from '../creativeWork/movie';
import * as EventFactory from '../event';
import { EventType } from '../eventType';
import { ILanguage } from '../language';
import { IMultilingualString } from '../multilingualString';
import { OfferType } from '../offerType';
import { OrganizationType } from '../organizationType';
import { PlaceType } from '../placeType';
import { PriceCurrency } from '../priceCurrency';
import { IProject } from '../project';

/**
 * 施設コンテンツに対するオファー
 */
export interface IOffer {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: OfferType.Offer;
    priceCurrency: PriceCurrency.JPY;
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
    'project' | 'typeOf' | 'id' | 'identifier' | 'name' | 'duration' | 'contentRating'
>;
export interface IOrganizer {
    typeOf: OrganizationType.Corporation;
    identifier: string;
    name: IMultilingualString;
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
    project: Pick<IProject, 'id' | 'typeOf'>;
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
    organizer?: IOrganizer;
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
export type ICreateParams = IAttributes;
/**
 * ソート条件
 */
export type ISortOrder = EventFactory.ISortOrder;
/**
 * 検索条件
 */
export interface ISearchConditions extends EventFactory.ISearchConditions<EventType.ScreeningEventSeries> {
    sort?: ISortOrder;
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
    };
}
