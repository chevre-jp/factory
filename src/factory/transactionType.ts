/**
 * 取引タイプ
 */
enum TransactionType {
    /**
     * 座席予約
     */
    Reserve = 'Reserve',
    /**
     * 座席予約キャンセル
     */
    CancelReservation = 'CancelReservation',
    /**
     * メンバーシップ登録
     */
    RegisterProgramMembership = 'RegisterProgramMembership',
    /**
     * サービス登録
     */
    RegisterService = 'RegisterService'
}
export default TransactionType;
