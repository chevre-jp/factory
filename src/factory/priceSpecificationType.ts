/**
 * 価格仕様タイプ
 */
enum PriceSpecificationType {
    /**
     * 基本価格仕様
     */
    PriceSpecification = 'PriceSpecification',
    /**
     * カテゴリーコードチャージ仕様
     */
    CategoryCodeChargeSpecification = 'CategoryCodeChargeSpecification',
    /**
     * 複合価格仕様
     */
    CompoundPriceSpecification = 'CompoundPriceSpecification',
    /**
     * ムビチケ券種区分チャージ仕様
     */
    MovieTicketTypeChargeSpecification = 'MovieTicketTypeChargeSpecification',
    /**
     * 単価仕様
     */
    UnitPriceSpecification = 'UnitPriceSpecification'
}

export default PriceSpecificationType;
