/**
 * タスク名
 */
enum TaskName {
    Reserve = 'reserve',
    CancelReservation = 'cancelReservation',
    CancelPendingReservation = 'cancelPendingReservation',
    AggregateOnProject = 'aggregateOnProject',
    AggregateScreeningEvent = 'aggregateScreeningEvent',
    ImportEventCapacitiesFromCOA = 'importEventCapacitiesFromCOA',
    ImportEventsFromCOA = 'importEventsFromCOA',
    ImportOffersFromCOA = 'importOffersFromCOA',
    CancelMoneyTransfer = 'cancelMoneyTransfer',
    MoneyTransfer = 'moneyTransfer',
    Refund = 'refund',
    RegisterService = 'registerService',
    Pay = 'pay',
    /**
     *  Eメールメッセージ送信
     */
    SendEmailMessage = 'sendEmailMessage',
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook',
    VoidPayment = 'voidPayment'
}
export default TaskName;
