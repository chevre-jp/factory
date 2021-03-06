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
        id?: string;
        typeOf?: any;
        name?: string;
        url?: string;
    };
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
 * 予約使用時イベントインターフェース
 */
export interface IOnReservationUsed {
    informAction?: IInformParams[];
}

export interface ICognitoSettings {
    /**
     * 顧客ユーザープール
     */
    customerUserPool: {
        id: string;
    };
}

/**
 * 注文ステータス変更時イベントインターフェース
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

// export interface IOnRefunded {
//     informOrder?: IInformParams[];
// }

/**
 * プロジェクト設定インターフェース
 */
export interface ISettings {
    importEventsInWeeks?: number;
    onPaymentStatusChanged?: IOnPaymentStatusChanged;
    onReservationStatusChanged?: IOnReservationStatusChanged;
    onReservationUsed?: IOnReservationUsed;
    cognito?: ICognitoSettings;
    onOrderStatusChanged?: IOnOrderStatusChanged;
    webhook?: IWebhookSettings;
    returnFee?: number;

    // ↓その他の設定
    sendgridApiKey?: string;
    transactionWebhookUrls?: string[];
    useMyCreditCards?: boolean;
    useTransactionClientUser?: boolean;
    useUsernameAsGMOMemberId?: boolean;
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
