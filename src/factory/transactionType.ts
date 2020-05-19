/**
 * 取引タイプ
 */
enum TransactionType {
    /**
     * 通貨転送
     */
    MoneyTransfer = 'MoneyTransfer',
    /**
     * 予約
     */
    Reserve = 'Reserve',
    /**
     * 予約キャンセル
     */
    CancelReservation = 'CancelReservation',
    /**
     * 決済
     * PaymentMethod: PaymentCard,Account,CreditCard,PaymentAgency...
     */
    Pay = 'Pay',
    /**
     * メンバーシップ登録
     */
    RegisterProgramMembership = 'RegisterProgramMembership',
    /**
     * サービス登録
     * Service: MembershipService,PaymentCard,Account,MoneyTransfer...
     */
    RegisterService = 'RegisterService'
}
export default TransactionType;
