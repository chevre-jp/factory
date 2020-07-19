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
    RegisterService = 'registerService',
    Pay = 'pay',
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook',
    VoidPayment = 'voidPayment'
}
export default TaskName;
