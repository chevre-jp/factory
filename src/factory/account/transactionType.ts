/**
 * 取引タイプ
 */
enum TransactionType {
    /**
     * 出金取引
     */
    Withdraw = 'Withdraw',
    /**
     * 入金取引
     */
    Deposit = 'Deposit',
    /**
     * 転送取引
     */
    Transfer = 'Transfer'
}

export default TransactionType;
