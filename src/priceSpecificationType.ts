/**
 * 価格仕様タイプ
 */
export enum PriceSpecificationType {
    /**
     * 基本価格仕様
     */
    PriceSpecification = 'PriceSpecification',
    /**
     * 区分加算料金
     */
    CategoryCodeChargeSpecification = 'CategoryCodeChargeSpecification',
    /**
     * 複合価格仕様
     */
    CompoundPriceSpecification = 'CompoundPriceSpecification',
    /**
     * 決済カード加算料金
     */
    MovieTicketTypeChargeSpecification = 'MovieTicketTypeChargeSpecification',
    /**
     * 単価仕様
     */
    UnitPriceSpecification = 'UnitPriceSpecification'
}
