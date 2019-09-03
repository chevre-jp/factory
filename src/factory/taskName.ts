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
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook'
}
export default TaskName;
