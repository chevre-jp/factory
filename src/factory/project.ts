import SortType from './sortType';

/**
 * 通知パラメータ
 */
export interface IInformParams {
    /**
     * 通知先
     */
    recipient?: {
        /**
         * 通知URL
         */
        url?: string;
    };
}

/**
 * イベント変更時イベントインターフェース
 */
export interface IOnEventChanged {
    informEvent?: IInformParams[];
}

/**
 * 予約ステータス変更時イベントインターフェース
 */
export interface IOnReservationStatusChanged {
    informReservation?: IInformParams[];
}

/**
 * プロジェクト設定インターフェース
 */
export interface ISettings {
    importEventsInWeeks?: number;
    onEventChanged?: IOnEventChanged;
    onReservationStatusChanged?: IOnReservationStatusChanged;
}

/**
 * プロジェクトインターフェース
 */
export interface IProject {
    typeOf: 'Project';
    id: string;
    alternateName?: string;
    description?: string;
    email?: string;
    logo?: string;
    name?: string;
    telephone?: string;
    url?: string;
    settings?: ISettings;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    _id?: SortType;
}

/**
 * プロジェクト検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    ids?: string[];
    /**
     * 名称
     */
    name?: string;
}
