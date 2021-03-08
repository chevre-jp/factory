import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
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

export interface IOnPaymentStatusChanged {
    informPayment?: IInformParams[];
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
    onPaymentStatusChanged?: IOnPaymentStatusChanged;
    onReservationStatusChanged?: IOnReservationStatusChanged;
}

/**
 * プロジェクトインターフェース
 */
export interface IProject extends IOrganization {
    typeOf: OrganizationType.Project;
    id: string;
    alternateName?: string;
    description?: string;
    name?: string;
    settings?: ISettings;
    subscription?: {
        identifier?: string;
    };
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
