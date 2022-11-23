import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
import { SortType } from './sortType';

/**
 * 通知パラメータ
 */
export interface IInformParams {
    /**
     * 通知先
     */
    recipient?: {
        id?: string;
        name?: string;
        url?: string;
    };
}
export interface IOnPaymentStatusChanged {
    informPayment?: IInformParams[];
}
/**
 * 予約使用時イベント
 */
export interface IOnReservationUsed {
    informAction?: IInformParams[];
}
// tslint:disable-next-line:no-empty-interface
export interface ICognitoSettings {
}
/**
 * 注文ステータス変更時イベント
 */
export interface IOnOrderStatusChanged {
    informOrder?: IInformParams[];
}
/**
 * ウェブフック設定
 */
export interface IWebhookSettings {
    /**
     * リクエストタイムアウト
     * {@link https://github.com/request/request#timeouts}
     */
    timeout?: number;
}
/**
 * プロジェクト設定
 */
export interface ISettings {
    importEventsInWeeks?: number;
    // 廃止(2022-10-29~)
    // onPaymentStatusChanged?: IOnPaymentStatusChanged;
    onReservationUsed?: IOnReservationUsed;
    cognito?: ICognitoSettings;
    onOrderStatusChanged?: IOnOrderStatusChanged;
    webhook?: IWebhookSettings;

    // ↓その他の設定
    sendgridApiKey?: string;
    transactionWebhookUrls?: string[];
    useMyCreditCards?: boolean;
    useUsernameAsGMOMemberId?: boolean;
    /**
     * プロダクトとしての興行管理を利用するかどうか
     */
    useEventServiceAsProduct?: boolean;
}
/**
 * プロジェクト
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
        useEventServiceAsProduct?: boolean;
    };
}
/**
 * ソート条件
 */
export interface ISortOrder {
    _id?: SortType;
}
/**
 * プロジェクト検索条件
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
