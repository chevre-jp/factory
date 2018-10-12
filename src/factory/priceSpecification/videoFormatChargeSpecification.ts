import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';
import VideoFormatType from '../videoFormatType';

/**
 * 上映方式チャージャ価格仕様インターフェース
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.VideoFormatChargeSpecification> & {
    /**
     * 適用上映方式
     */
    appliesToVideoFormat: VideoFormatType;
};
