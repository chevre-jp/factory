import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';
import VideoFormatType from '../videoFormatType';

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
};
