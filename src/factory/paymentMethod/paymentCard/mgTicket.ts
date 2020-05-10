import { PaymentMethodType } from '../../paymentMethodType';

import { IAttributes } from './movieTicket';

/**
 * MGチケットケインターフェース
 */
export interface IMGTicket extends IAttributes {
    typeOf: PaymentMethodType.MGTicket;
}
