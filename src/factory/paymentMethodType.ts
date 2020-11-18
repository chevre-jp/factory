/**
 * 決済方法タイプ
 */
export enum PaymentMethodType {
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
    Others = 'Others'
}
