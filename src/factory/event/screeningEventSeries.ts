import * as COA from '@motionpicture/coa-service';

import { ICreativeWork as IMovie } from '../creativeWork/movie';
import * as EventFactory from '../event';
import EventType from '../eventType';
import { ILanguage } from '../language';
import IMultilingualString from '../multilingualString';
import * as OfferFactory from '../offer';
import OrganizationType from '../organizationType';
import PlaceType from '../placeType';
import { IProject } from '../project';
import SoundFormatType from '../soundFormatType';
import VideoFormatType from '../videoFormatType';

/**
 * 上映イベントシリーズに対するオファーインターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface IOffer extends OfferFactory.IOffer {
}

export interface IVideoFormat {
    typeOf: VideoFormatType;
    name: string;
}

export interface ISoundFormat {
    typeOf: SoundFormatType;
    name: string;
}
/**
 * 上映作品インターフェース
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
    kbnEirin?: COA.services.master.IKubunNameResult;
    /**
     * 映像区分
     * ２D、３D
     */
    kbnEizou?: COA.services.master.IKubunNameResult;
    /**
     * 上映方式区分(ＩＭＡＸ，４ＤＸ等)
     */
    kbnJoueihousiki?: COA.services.master.IKubunNameResult;
    /**
     * 字幕吹替区分(字幕、吹き替え)
     */
    kbnJimakufukikae?: COA.services.master.IKubunNameResult;
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
    subtitleLanguage?: ILanguage | null;
    /**
     * 吹替利用可能言語
     */
    dubLanguage?: ILanguage | null;
    /**
     * 上映方式
     */
    videoFormat: IVideoFormat[] | COA.services.master.IKubunNameResult;
    /**
     * 音響方式
     */
    soundFormat: ISoundFormat[];
    /**
     * 上映作品
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
        alternateName?: IMultilingualString;
        description?: IMultilingualString;
        address?: IMultilingualString;
    };
    organizer?: IOrganizer;
    /**
     * 作品タイトル名（カナ）
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
 * 上映イベントインターフェース
 * 劇場作品に相当
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
    location?: {
        /**
         * 場所の識別子リスト
         */
        branchCodes?: string[];
    };
    workPerformed?: {
        /**
         * イベントで上演される作品識別子リスト
         */
        identifiers?: string[];
    };
}
