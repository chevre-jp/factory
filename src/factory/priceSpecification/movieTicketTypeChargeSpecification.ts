import { PaymentMethodType } from '../paymentMethodType';
import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';
import VideoFormatType from '../videoFormatType';

export interface IMovieTicket {
    typeOf: PaymentMethodType.MovieTicket;
    /**
     * 購入管理番号(ムビチケ購入番号)
     */
    identifier?: string;
    /**
     * pinコード(ムビチケ暗証番号)
     */
    accessCode?: string;
    /**
     * 券種区分
     */
    serviceType?: string;
}

/**
 * ムビチケ券種区分チャージ仕様インターフェース
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.MovieTicketTypeChargeSpecification> & {
    price: number;
    /**
     * 適用上映方式
     */
    appliesToVideoFormat: VideoFormatType;
    /**
     * 適用ムビチケ券種区分
     */
    appliesToMovieTicketType: string;
    /**
     * 適用ムビチケ
     */
    appliesToMovieTicket?: IMovieTicket;
};
