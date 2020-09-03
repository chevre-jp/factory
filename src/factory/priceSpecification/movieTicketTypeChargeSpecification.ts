import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';
import { PaymentServiceType } from '../service/paymentService';

export interface IMovieTicket {
    typeOf: PaymentServiceType.MovieTicket;
    /**
     * 購入管理番号(ムビチケ購入番号)
     */
    identifier?: string;
    /**
     * pinコード(ムビチケ暗証番号)
     */
    accessCode?: string;
    /**
     * 決済カード区分
     */
    serviceType?: string;
    serviceOutput?: {
        /**
         * 決済方法タイプ
         */
        typeOf?: string;
    };
}

/**
 * ムビチケ券種区分チャージ仕様インターフェース
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.MovieTicketTypeChargeSpecification> & {
    price: number;
    /**
     * 適用上映方式
     */
    appliesToVideoFormat: string;
    /**
     * 適用ムビチケ
     */
    appliesToMovieTicket?: IMovieTicket;
};
