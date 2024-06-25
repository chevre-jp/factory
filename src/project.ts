import { IBusinessEntityType } from './businessEntityType';
import { IMerchantReturnPolicy } from './merchantReturnPolicy';
import { IAvailableAtOrFrom, IOffer } from './offer';
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
export interface ISendEmailMessageSettings {
    sender?: { email?: string };
}
/**
 * プロジェクト設定
 */
export interface ISettings {
    importEventsInWeeks?: number;
    onOrderStatusChanged?: IOnOrderStatusChanged;
    webhook?: IWebhookSettings;

    // ↓その他の設定
    // sendEmailMessage設定追加(2023-08-21~)
    sendEmailMessage?: ISendEmailMessageSettings;
    sendgridApiKey?: string;
    transactionWebhookUrls?: string[];
    useMyCreditCards?: boolean;
    useUsernameAsGMOMemberId?: boolean;
    /**
     * 受け入れるトークン発行者
     */
    tokenIssuers?: string[];
}
export interface ISubscription {
    identifier?: string;
    /**
     * プロダクトとしての興行管理を利用するかどうか
     */
    useEventServiceAsProduct?: boolean;
    /**
     * サブカタログ管理を利用するかどうか
     */
    useOfferCatalogItem?: boolean;

}
export type IHasMerchantReturnPolicy = Pick<IMerchantReturnPolicy, 'sameAs' | 'typeOf'> & {
    /**
     * ポリシー識別子(プロジェクト自動生成)
     */
    identifier?: string;
};
export interface IMakesOffer extends Pick<
    IOffer,
    'typeOf' | 'availableAtOrFrom'
> {
    availableAtOrFrom: IAvailableAtOrFrom[];
    /**
     * 適用カスタマータイプ
     */
    eligibleCustomerType?: IBusinessEntityType[];
}
/**
 * プロジェクト
 */
export interface IProject extends Pick<IOrganization, 'id' | 'logo' | 'name' | 'typeOf'> {
    typeOf: OrganizationType.Project;
    id: string;
    alternateName?: string;
    description?: string;
    hasMerchantReturnPolicy?: IHasMerchantReturnPolicy;
    name?: string;
    settings?: ISettings;
    subscription?: ISubscription;
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
    id?: { $eq?: string };
    ids?: string[];
    /**
     * 名称
     */
    name?: string;
}
