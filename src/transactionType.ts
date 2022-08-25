/**
 * 取引タイプ
 */

export enum TransactionType {
    /**
     * 通貨転送
     */
    MoneyTransfer = 'MoneyTransfer',
    /**
     * 注文取引
     */
    PlaceOrder = 'PlaceOrder',
    /**
     * 注文返品取引
     */
    ReturnOrder = 'ReturnOrder'
}
