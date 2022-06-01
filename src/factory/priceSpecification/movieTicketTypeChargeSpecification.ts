import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import { PriceSpecificationType } from '../priceSpecificationType';
import { PaymentServiceType } from '../service/paymentService';

export interface IAppliesToMovieTicket {
    typeOf: PaymentServiceType.MovieTicket;
    /**
     * 購入管理番号
     */
    identifier?: string;
    /**
     * pinコード
     */
    // accessCode?: string;
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
     * 適用MovieTicket
     */
    appliesToMovieTicket: IAppliesToMovieTicket;
};
