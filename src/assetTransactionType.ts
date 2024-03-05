/**
 * 資産取引タイプ
 */
export enum AssetTransactionType {
    /**
     * 通貨転送
     */
    MoneyTransfer = 'MoneyTransfer',
    /**
     * 予約
     */
    Reserve = 'Reserve',
    /**
     * 予約取消
     */
    CancelReservation = 'CancelReservation',
    /**
     * 決済
     */
    Pay = 'Pay',
    /**
     * 返金
     */
    Refund = 'Refund',
    /**
     * サービス登録
     * Service: MembershipService,PaymentCard...
     */
    RegisterService = 'RegisterService'
}
