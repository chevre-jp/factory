import { IInvoice } from '../invoice';
import { IMultilingualString } from '../multilingualString';
import { IIssuedThrough, IPermit } from '../permit';
import { IAvailableChannel as IProductAvailableChannel, ISearchConditions as ISearchProductConditions, IServiceType } from '../product';
import { IProject } from '../project';
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
     * 決済カード興行会社コード
     */
    kgygishCd?: string;
    /**
     * 決済カードサイトコード
     */
    stCd?: string;
}
export interface IProvider extends Pick<ISeller, 'typeOf'> {
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
    totalPaymentDue?: {
        // 最大同時着券数(MovieTicketIFの場合)
        maxValue?: number;
    };
};
/**
 * CreditCardIF決済サービスのカード属性
 * ポイントカード情報など
 */
export interface IPaymentMethodAsServiceOutput {
    amount?: {
        /**
         * カード通貨区分
         */
        currency: string;
    };
}
/**
 * 出力されるインボイス
 */
export interface IInvoiceAsServiceOutput extends Pick<IInvoice, 'paymentStatus' | 'typeOf'> {
    /**
     * 発行される決済方法
     */
    paymentMethod?: IPaymentMethodAsServiceOutput; // CreditCardIFのカード通貨区分を追加(2023-08-07~)
}
/**
 * 出力されるメンバーシップ
 */
export type IPermitAsServiceOutput = Pick<IPermit, 'typeOf'> & {
    /**
     * メンバーシップサービス
     * メンバーシップ区分が含まれる
     */
    issuedThrough: Pick<IIssuedThrough, 'serviceType'>;
};
export type IServiceOutput = IInvoiceAsServiceOutput | IPermitAsServiceOutput;
/**
 * 決済サービス
 * {@link https://schema.org/Service}
 */
export interface IService extends Pick<IThing, 'name' | 'description'> {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: PaymentServiceType;
    id?: string;
    availableChannel?: IAvailableChannel;
    description?: Pick<IMultilingualString, 'en' | 'ja'>;
    name?: Pick<IMultilingualString, 'en' | 'ja'>;
    /**
     * The product identifier, such as ISBN.
     * プロジェクト内でユニークなプロダクトID
     */
    productID: string;
    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     * (InvoiceやPermit)
     */
    serviceOutput?: IServiceOutput | IServiceOutput[]; // Array対応(2023-09-01~)
    /**
     * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
     * 決済サービスの場合、serviceType.codeValueが決済方法区分
     */
    serviceType: IServiceType;
    additionalProperty?: IPropertyValue<string>[];
}
export type ISearchConditions = Omit<ISearchProductConditions, 'typeOf'> & {
    typeOf?: {
        $eq?: PaymentServiceType;
        $in?: PaymentServiceType[];
    };
};
