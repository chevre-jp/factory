import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';
import { PaymentServiceType } from '../service/paymentService';

/**
 * 適用決済カード
 * どの決済方法区分のどの決済カード区分に対して適用されるか
 */
export interface IAppliesToMovieTicket {
    typeOf: PaymentServiceType.MovieTicket;
    /**
     * 決済カード区分
     */
    serviceType: string;
    serviceOutput: {
        /**
         * 決済方法区分
         */
        typeOf: string;
    };
}
/**
 * 決済カード加算料金
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.MovieTicketTypeChargeSpecification> & {
    price: number;
    /**
     * 適用上映方式
     */
    appliesToVideoFormat: string;
    /**
     * 適用決済カード
     */
    appliesToMovieTicket: IAppliesToMovieTicket;
};
