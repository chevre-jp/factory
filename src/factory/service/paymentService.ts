export interface IServiceOutput {
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
    CreditCard = 'CreditCard',
    MovieTicket = 'MovieTicket'
}

/**
 * ペイメントサービスインターフェース
 */
export interface IService {
    typeOf: PaymentServiceType;
    availableChannel?: IAvailableChannel;
    serviceOutput?: IServiceOutput;
}
