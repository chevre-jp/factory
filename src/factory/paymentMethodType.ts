/**
 * 決済方法タイプ
 */
export enum PaymentMethodType {
    /**
     * 口座決済
     */
    Account = 'Account',
    /**
     * 現金
     */
    Cash = 'Cash',
    /**
     * クレジットカード
     */
    CreditCard = 'CreditCard',
    /**
     * 電子マネー
     */
    EMoney = 'EMoney',
    /**
     * MGチケット
     */
    MGTicket = 'MGTicket',
    /**
     * ムビチケ
     */
    MovieTicket = 'MovieTicket',
    /**
     * その他
     */
    Others = 'Others',
    /**
     * 決済カード
     */
    PaymentCard = 'PaymentCard'
}
