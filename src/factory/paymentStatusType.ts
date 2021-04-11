/**
 * 決済ステータス
 */
enum PaymentStatusType {
    PaymentAutomaticallyApplied = 'PaymentAutomaticallyApplied',
    PaymentComplete = 'PaymentComplete',
    PaymentDeclined = 'PaymentDeclined',
    PaymentDue = 'PaymentDue',
    PaymentPastDue = 'PaymentPastDue'
}
export default PaymentStatusType;
