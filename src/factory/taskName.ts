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
    RegisterService = 'registerService',
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook'
}
export default TaskName;
