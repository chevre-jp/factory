import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';
import SoundFormatType from '../soundFormatType';

/**
 * 音響方式チャージャ価格仕様インターフェース
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.SoundFormatChargeSpecification> & {
    /**
     * 適用方式
     */
    appliesToSoundFormat: SoundFormatType;
};
