/**
 * 決済方法タイプ
 */
export enum PaymentMethodType {
    /**
     * 現金
     */
    Cash = 'Cash',
    /**
     * 口座決済
     */
    Account = 'Account',
    /**
     * 電子マネー
     */
    EMoney = 'EMoney',
    /**
     * クレジットカード
     */
    CreditCard = 'CreditCard',
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
     * プリペイドカード
     */
    PrepaidCard = 'PrepaidCard'
}
