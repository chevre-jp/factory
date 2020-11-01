import { IProject } from '../project';

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
    project: IProject;
    typeOf: PaymentServiceType;
    id?: string;
    availableChannel?: IAvailableChannel;
    productID?: string;
    serviceOutput?: IServiceOutput;
}
