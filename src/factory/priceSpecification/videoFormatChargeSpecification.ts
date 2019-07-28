import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';
import VideoFormatType from '../videoFormatType';

/**
 * 上映方式チャージ仕様インターフェース
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.VideoFormatChargeSpecification> & {
    price: number;
    /**
     * 適用方式
     */
    appliesToVideoFormat: VideoFormatType;
};
