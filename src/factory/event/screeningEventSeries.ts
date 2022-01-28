import * as COA from '@motionpicture/coa-service';

import { ICreativeWork as IMovie } from '../creativeWork/movie';
import * as EventFactory from '../event';
import EventType from '../eventType';
import { ILanguage } from '../language';
import IMultilingualString from '../multilingualString';
import * as OfferFactory from '../offer';
import { OrganizationType } from '../organizationType';
import { PlaceType } from '../placeType';
import { IProject } from '../project';

/**
 * 上映イベントシリーズに対するオファーインターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface IOffer extends OfferFactory.IOffer {
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
 * コンテンツインターフェース
 */
export type IWorkPerformed = IMovie;
export interface IOrganizer {
    typeOf: OrganizationType;
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

export interface IAttributes extends EventFactory.IAttributes<EventType.ScreeningEventSeries> {
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
     * 上映場所
     */
    location: {
        project: IProject;
        /**
         * スキーマタイプ
         */
        typeOf: PlaceType.MovieTheater;
        /**
         * 場所ID
         */
        id: string;
        /**
         * 施設コード
         */
        branchCode: string;
        /**
         * 場所名称
         */
        name?: IMultilingualString;
        /**
         * 場所名称(カナ)
         */
        kanaName?: string;
        alternateName?: IMultilingualString;
        description?: IMultilingualString;
        address?: IMultilingualString;
    };
    organizer?: IOrganizer;
    /**
     * 名称（カナ）
     */
    kanaName: string;
    /**
     * イベント名称
     */
    name: IMultilingualString;
    /**
     * 公演終了予定日
     * ISO 8601 date format
     */
    endDate?: Date;
    /**
     * 公演開始予定日
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
 * 施設コンテンツインターフェース
 */
export type IEvent = EventFactory.IEvent<IAttributes>;

/**
 * ソート条件インターフェース
 */
export type ISortOrder = EventFactory.ISortOrder;

/**
 * 上映イベントの検索条件インターフェース
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
         * イベントで上演されるコンテンツコードリスト
         */
        identifiers?: string[];
    };
}
