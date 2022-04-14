/**
 * 決済ステータス
 */
export enum PaymentStatusType {
    PaymentAutomaticallyApplied = 'PaymentAutomaticallyApplied',
    PaymentComplete = 'PaymentComplete',
    PaymentDeclined = 'PaymentDeclined',
    PaymentDue = 'PaymentDue',
    PaymentPastDue = 'PaymentPastDue'
}
