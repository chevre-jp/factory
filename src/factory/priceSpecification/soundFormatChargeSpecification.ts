import { IPriceSpecification as BaseSpecification } from '../priceSpecification';
import PriceSpecificationType from '../priceSpecificationType';
import SoundFormatType from '../soundFormatType';

/**
 * 音響方式チャージ仕様インターフェース
 */
export type IPriceSpecification = BaseSpecification<PriceSpecificationType.SoundFormatChargeSpecification> & {
    price: number;
    /**
     * 適用方式
     */
    appliesToSoundFormat: SoundFormatType;
};
