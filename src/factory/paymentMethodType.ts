/**
 * 決済方法タイプ
 */
export enum PaymentMethodType {
    /**
     * 現金
     */
    Cash = 'Cash',
    /**
     * 内部口座決済
     */
    Account = 'Account',
    /**
     * 電子マネー
     */
    EMoney = 'EMoney',
    /**
     * クレジットカード決済
     */
    CreditCard = 'CreditCard',
    /**
     * ムビチケ
     */
    MovieTicket = 'MovieTicket',
    /**
     * その他
     */
    Others = 'Others'
}
