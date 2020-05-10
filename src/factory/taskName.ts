/**
 * タスク名
 */
enum TaskName {
    Reserve = 'reserve',
    CancelReservation = 'cancelReservation',
    CancelPendingReservation = 'cancelPendingReservation',
    AggregateScreeningEvent = 'aggregateScreeningEvent',
    ImportEventsFromCOA = 'importEventsFromCOA',
    ImportOffersFromCOA = 'importOffersFromCOA',
    CancelMoneyTransfer = 'cancelMoneyTransfer',
    MoneyTransfer = 'moneyTransfer',
    RegisterService = 'registerService',
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook'
}
export default TaskName;
