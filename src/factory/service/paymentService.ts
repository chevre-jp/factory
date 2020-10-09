export interface IServiceOutput {
    /**
     * 決済方法タイプ
     */
    typeOf: string;
}

/**
 * 外部サービス認証情報
 */
export interface ICredentials {
    siteId?: string;
    sitePass?: string;
    authorizeServerDomain?: string;
    clientId?: string;
    clientSecret?: string;
}

export interface IAvailableChannel {
    typeOf: 'ServiceChannel';
    serviceUrl?: string;
    credentials?: ICredentials;
}

export enum PaymentServiceType {
    Account = 'Account',
    CreditCard = 'CreditCard',
    MovieTicket = 'MovieTicket',
    PaymentCard = 'PaymentCard'
}

/**
 * ペイメントサービスインターフェース
 */
export interface IService {
    typeOf: PaymentServiceType;
    availableChannel?: IAvailableChannel;
    serviceOutput?: IServiceOutput;
}
