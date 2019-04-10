/**
 * タスク名
 */
enum TaskName {
    Reserve = 'reserve',
    CancelReservation = 'cancelReservation',
    CancelPendingReservation = 'cancelPendingReservation',
    AggregateScreeningEvent = 'aggregateScreeningEvent',
    ImportEventsFromCOA = 'importOffersFromCOA',
    ImportOffersFromCOA = 'importOffersFromCOA'
}
export default TaskName;
