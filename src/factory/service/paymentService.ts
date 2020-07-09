import { PaymentMethodType } from '../paymentMethodType';

export interface IServiceOutput {
    typeOf: PaymentMethodType;
}

export interface IAvailableChannel {
    typeOf: 'ServiceChannel';
    serviceUrl?: string;
}

export enum PaymentServiceType {
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
