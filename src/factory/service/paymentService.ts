import { IOrganization } from '../organization';
import { IProject } from '../project';
import { IServiceType } from '../serviceType';
import { IThing } from '../thing';

// export interface IServiceOutput {
//     /**
//      * 決済方法タイプ
//      */
//     typeOf: string;
// }

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
     * 外部決済URL発行が必要な場合値あり
     */
    paymentUrl?: string;
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
    /**
     * 販売者の決済サービス利用時資格情報
     */
    credentials?: IProviderCredentials;
}

/**
 * ペイメントサービスインターフェース
 * {@link https://schema.org/Service}
 */
export interface IService extends IThing {
    project: IProject;
    typeOf: PaymentServiceType;
    id?: string;
    availableChannel?: IAvailableChannel;
    productID?: string;
    /**
     * ペイメントサービス提供者(決済サービスを利用する販売者)
     */
    provider?: IProvider[];
    // serviceOutput?: IServiceOutput;
    /**
     * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
     */
    serviceType?: IServiceType;
}
