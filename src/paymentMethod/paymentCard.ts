import { IMonetaryAmount } from '../monetaryAmount';
import { IPaymentMethod } from '../paymentMethod';

// export type IAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'validThrough' | 'value'>;
export type IAmount = Pick<IMonetaryAmount, 'typeOf' | 'validThrough'>;
/**
 * payment card interface
 */
export interface IPaymentCard extends IPaymentMethod {
    accessCode?: string;
    /**
     * A cardholder benefit that pays the cardholder a small percentage of their net expenditures.
     */
    // cashBack?: number;
    /**
     * The amount of money.
     */
    amount?: IAmount;
    serviceOutput?: any;
    serviceType?: any;
}
