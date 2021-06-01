import { IOrganization } from '../organization';
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
    CreditCard = 'CreditCard',
    FaceToFace = 'FaceToFace',
    MovieTicket = 'MovieTicket',
    PaymentCard = 'PaymentCard'
}

export interface IProviderCredentials {
    /**
     * GMOショップID
     */
    shopId?: string;
    /**
     * GMOショップパス
     */
    shopPass?: string;
    /**
     * トークン認証コード
     */
    tokenizationCode?: string;
    /**
     * ムビチケ興行会社コード
     */
    kgygishCd?: string;
    /**
     * ムビチケサイトコード
     */
    stCd?: string;
}

export interface IProvider extends IOrganization {
    credentials?: IProviderCredentials;
}

/**
 * ペイメントサービスインターフェース
 * {@link https://schema.org/Service}
 */
export interface IService {
    project: IProject;
    typeOf: PaymentServiceType;
    id?: string;
    availableChannel?: IAvailableChannel;
    productID?: string;
    /**
     * ペイメントサービス提供者
     */
    provider?: IProvider[];
    serviceOutput?: IServiceOutput;
}
