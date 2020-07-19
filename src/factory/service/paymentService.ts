import { PaymentMethodType } from '../paymentMethodType';

export interface IServiceOutput {
    typeOf: PaymentMethodType;
}

export interface IAvailableChannel {
    typeOf: 'ServiceChannel';
    serviceUrl?: string;
    siteId?: string;
    sitePass?: string;
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
