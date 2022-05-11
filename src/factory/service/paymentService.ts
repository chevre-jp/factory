import { IOrganization } from '../organization';
import { IAvailableChannel } from '../product';
import { IProject } from '../project';
import { IPropertyValue } from '../propertyValue';
import { IServiceType } from '../serviceType';
import { IThing } from '../thing';

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
     * 外部決済URL有効時間(秒)
     * 外部決済URL発行が必要な場合のみ
     */
    paymentUrlExpiresInSeconds?: number;
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
 * 決済サービスインターフェース
 * {@link https://schema.org/Service}
 */
export interface IService extends IThing {
    project: IProject;
    typeOf: PaymentServiceType;
    id?: string;
    availableChannel?: IAvailableChannel;
    productID?: string;
    /**
     * 決済サービス提供者(決済サービスを利用する販売者)
     */
    provider?: IProvider[];
    // serviceOutput?: IServiceOutput;
    /**
     * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
     * 決済サービスの場合、serviceType.codeValueが決済方法区分
     */
    serviceType?: IServiceType;
    additionalProperty?: IPropertyValue<string>[];
}
