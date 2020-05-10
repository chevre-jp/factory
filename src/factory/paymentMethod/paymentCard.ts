import { IMonetaryAmount } from '../monetaryAmount';
import { IPaymentMethod } from '../paymentMethod';

/**
 * payment card interface
 */
export interface IPaymentCard extends IPaymentMethod {
    accessCode?: string;
    /**
     * A cardholder benefit that pays the cardholder a small percentage of their net expenditures.
     */
    cashBack?: number;
    /**
     * The amount of money.
     */
    amount?: IMonetaryAmount;
    serviceOutput?: any;
    serviceType?: any;
}
