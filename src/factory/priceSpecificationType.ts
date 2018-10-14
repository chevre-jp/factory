/**
 * 価格仕様タイプ
 */
enum PriceSpecificationType {
    /**
     * 複合価格仕様
     */
    CompoundPriceSpecification = 'CompoundPriceSpecification',
    /**
     * 音響方式チャージ仕様
     */
    SoundFormatChargeSpecification = 'SoundFormatChargeSpecification',
    /**
     * 単価仕様
     */
    UnitPriceSpecification = 'UnitPriceSpecification',
    /**
     * 上映方式チャージし仕様
     */
    VideoFormatChargeSpecification = 'VideoFormatChargeSpecification'
}
export default PriceSpecificationType;
