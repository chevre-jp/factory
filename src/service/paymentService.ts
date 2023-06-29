import { IAvailableChannel as IProductAvailableChannel, IServiceType } from '../product';
import { IOnPaymentStatusChanged, IProject } from '../project';
import { IPropertyValue } from '../propertyValue';
import { ISeller } from '../seller';
import { IThing } from '../thing';

export enum PaymentServiceType {
    CreditCard = 'CreditCard',
    FaceToFace = 'FaceToFace',
    MovieTicket = 'MovieTicket',
    PaymentCard = 'PaymentCard'
}
export interface IPaymentUrlSettings {
    /**
     * 外部決済URL有効時間(秒)
     * 外部決済URL発行が必要な場合のみ
     */
    expiresInSeconds: number;
    useCallback?: boolean;
    useWebhook?: boolean;
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
    paymentUrl?: IPaymentUrlSettings;
    /**
     * ムビチケ興行会社コード
     */
    kgygishCd?: string;
    /**
     * ムビチケサイトコード
     */
    stCd?: string;
}

export interface IProvider extends Pick<ISeller, 'name' | 'typeOf'> {
    /**
     * 販売者ID
     */
    id: string;
    /**
     * 販売者の決済サービス利用時資格情報
     */
    credentials?: IProviderCredentials;
}
export type IAvailableChannel = IProductAvailableChannel & {
    onPaymentStatusChanged?: IOnPaymentStatusChanged;
    totalPaymentDue?: {
        // 最大同時着券数(MovieTicketIFの場合)
        maxValue?: number;
    };
};
/**
 * 決済サービスインターフェース
 * {@link https://schema.org/Service}
 */
export interface IService extends Pick<IThing, 'name' | 'description'> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: PaymentServiceType;
    id?: string;
    availableChannel?: IAvailableChannel;
    productID: string;
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
